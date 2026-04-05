---
title: "불안정 시스템을 위한 PID 제어기 튜닝: Ziegler-Nichols 및 최신 기법"
date: 2026-03-14
description: "고전적 기법과 최적화 기반 기법을 활용한 불안정 시스템의 단계별 PID 튜닝 가이드."
slug: "pid-controller-tuning-unstable-systems-guide"
draft: false
schema: "Article"
author: "Henry"
categories:
  - "Technology"
tags:
  - "PID-tuning"
  - "control-engineering"
  - "process-control"
keywords:
  - "PID controller tuning unstable systems"
  - "Ziegler-Nichols tuning method"
  - "PID parameter optimization"
  - "process control stabilization techniques"
related_radar: []
---

# 불안정 시스템의 PID 튜닝: 실제로 효과가 있는 방법

안정 시스템용으로 튜닝된 PID 제어기는 불안정 시스템에서 실패한다 -- 온도 폭주, 격렬한 진동, 또는 장비 파손을 일으킨다. 불안정 시스템(발열 반응기, 쿼드콥터, 전력망)은 능동 제어 없이 발산하며, 더 빠른 피드백 루프, 더 공격적인 감쇠, 시스템 지연에 대한 세심한 주의가 필요하다.

이 가이드는 Ziegler-Nichols(고전적) 기법과 최적화 기반(현대적) 튜닝을 다루며, 오버슈트를 28%에서 4%로 줄인 실제 사례를 포함한다.

<!-- ![다이어그램: 외란에 대한 안정 vs 불안정 시스템 응답](/images/pid-stable-vs-unstable.png) -->

## PID 기본 원리

| 항 | 기능 | 과도하게 높을 때의 위험 |
|---|---|---|
| **P** (비례) | 현재 오차를 증폭 | 진동, 오버슈트 |
| **I** (적분) | 정상상태 오차 제거 | 느린 응답, 와인드업 |
| **D** (미분) | 변화율 기반 진동 억제 | 노이즈 증폭 |

**성능 목표:**
- 오버슈트: <20%
- 정착 시간: 2% 허용 범위 이내
- 정상상태 오차: 거의 제로
- 상승 시간: 최종값의 90%까지

## 불안정 시스템이 다른 이유

불안정 시스템은 편차를 증폭하는 양성 피드백 메커니즘을 갖는다. 골짜기가 아닌 언덕 꼭대기의 공을 떠올려라. 표준 튜닝은 폐루프 극점을 우반면으로 밀어 발산을 일으킨다.

**요구사항:** 보수적인 비례 이득과 전략적 미분 감쇠의 조합.

**실제 사례:** 발열 반응기 온도, 전력망 주파수, 기계적 공진이 있는 정밀 스핀들 속도.

## Ziegler-Nichols: 폐루프 방식

1. I와 D를 0으로 설정
2. P 이득을 점진적으로 올려 지속 진동이 발생할 때까지 진행
3. 임계 이득(Kcu)과 궁극 주기(Pu) 기록
4. 파라미터 계산:

| 파라미터 | 공식 |
|---|---|
| Kp | 0.6 x Kcu |
| Ki | 1.2 x Kcu / Pu |
| Kd | 0.075 x Kcu x Pu |

<!-- ![주석 포함 오실로스코프 캡처: 임계 이득에서의 지속 진동](/images/pid-critical-oscillation.png) -->

**안전 수칙:** 액추에이터 이동에 하드웨어 제한을 두라. 0.05~0.1 이득 단계로 시작하라. 수동 오버라이드를 항상 준비하라.

## Ziegler-Nichols: 개루프 방식

폐루프 테스트가 위험한 경우(화학 반응기, 전력망) 사용한다. 피드백 없이 5~15% 스텝 입력을 인가하고 응답을 분석한다.

**주어진 값:** 시간 지연 L = 20s, 시간 상수 T = 45s, 스텝 = 10%:
- Kp = (1.2 x 45) / (20 x 0.10) = 27.0
- Ki = 27.0 / (2 x 20) = 0.675
- Kd = 27.0 x 20 / 0.5 = 1,080

이 방법은 보수적인 값을 산출한다 -- 안전 중요 시스템의 초기 설정에 적합하다.

## 최신 기법

| 기법 | 소요 시간 | 정확도 | 적합 용도 |
|---|---|---|---|
| Ziegler-Nichols | 30-60분 | +/-15% | 빠른 초기값 |
| 릴레이 자동 튜닝 | 5-10분 | +/-8% | 산업 현장 배포 |
| 주파수 응답 | 15-30분 | +/-3% | 마진 보장이 필요한 선형 시스템 |
| 최적화 기반 | 10-20분 | +/-2% | 다목적, 비선형 시스템 |

**최적화 접근법**은 튜닝을 오버슈트, 정착 시간, 제어 노력을 균형있게 최소화하는 문제로 다룬다:

```python
from scipy.optimize import minimize

def cost_function(gains, system_model, setpoint_change):
    kp, ki, kd = gains
    response = simulate_closed_loop(system_model, kp, ki, kd, setpoint_change)
    overshoot = max(response) - setpoint_change
    settling_time = find_settling_time(response, tolerance=0.02)
    control_effort = sum(abs(diff(response)))
    return 2.0 * overshoot + 0.5 * settling_time + 0.1 * control_effort

optimal = minimize(cost_function, x0=[1.0, 0.5, 0.2],
                   args=(plant, 1.0), method='Nelder-Mead')
```

## 구현: 안티와인드업이 포함된 임베디드 PID

불안정 시스템은 적분 와인드업에 취약하다 -- 출력 포화 상태에서 적분항이 누적되어 느린 회복과 오버슈트를 유발한다.

```c
typedef struct {
    float kp, ki, kd;
    float integral_sum;
    float previous_error;
    float output_limit_high, output_limit_low;
} PIDController;

float compute_pid(PIDController *pid, float setpoint, float measured, float dt) {
    float error = setpoint - measured;
    float p_term = pid->kp * error;
    float integral_candidate = pid->integral_sum + (pid->ki * error * dt);
    float d_term = pid->kd * (error - pid->previous_error) / dt;
    float output = p_term + pid->integral_sum + d_term;

    if (output > pid->output_limit_high)
        output = pid->output_limit_high;
    else if (output < pid->output_limit_low)
        output = pid->output_limit_low;
    else
        pid->integral_sum = integral_candidate;  // only accumulate when not saturated

    pid->previous_error = error;
    return output;
}
```

**샘플링 레이트:** 시스템 지배 시간 상수의 10~50배. 응답 시간 5초인 열 시스템: 2~10Hz 샘플링. 응답 시간 100ms인 기계 시스템: 10~100Hz.

## 사례 연구: 200C 설정점의 산업용 퍼니스

<!-- ![튜닝 전후 온도 응답 곡선](/images/pid-furnace-tuning-results.png) -->

| 지표 | 튜닝 전 | 튜닝 후 |
|---|---|---|
| 오버슈트 | 28% (228C 피크) | 4% (202C 피크) |
| 정착 시간 | 8분 이상 | 3분 |
| 정상상태 오차 | +/-3C | +/-0.5C |
| 진동 | 45초 주기, 10분 이상 | 5분 내 소멸 |

**Ziegler-Nichols 적용:** 임계 이득 Kc = 2.4, 주기 Pc = 40s. 계산값 Kp = 1.44, Ki = 0.072, Kd = 28.8. 미분 항의 미세 조정으로 잔여 진동을 제거했다.

## 문제 해결 빠른 참조

| 문제 | 조치 |
|---|---|
| 지속적 진동 | P를 10~15% 줄이고 D를 늘린다 |
| 느린 응답 | D를 먼저 줄이고, P를 5% 단위로 늘린다 |
| 오버슈트 + 링잉 | P를 20% 줄이고 D를 10% 늘린다 |
| 외란에 대한 민감성 | I를 점진적으로 늘린다 |
| 다중 루프 상호작용 | 가장 빠른 루프부터 튜닝하고, 느린 루프의 이득을 줄인다 |

## 검증 프로토콜

1. 기록된 시스템 동특성으로 먼저 시뮬레이션한다
2. 계산된 이득의 30%에서 시작하여 점진적으로 증가시킨다
3. 스텝 외란을 주입하고 과도 응답을 관찰한다
4. 최소 및 최대 설정점에서 테스트한다
5. 지속적으로 모니터링한다: 오차 잔류, 진동 분산, 기준선 대비 응답 드리프트
