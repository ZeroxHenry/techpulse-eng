# 대본 예시: ZED X Mini + Jetson

**영상 제목:** ZED X Mini + Jetson: 30일간의 삽질 끝에 성공
**날짜:** 2026-04-10
**Pillar:** 로봇공학
**예상 길이:** 18분
**StackPulse 슬러그:** /study/zed-x-mini-jetson-setup

---

> 각 구간마다 **한국어 (음성)** 와 **English (subtitle)** 병렬 작성.
> 녹화 후 한국어 → KO SRT, English → EN SRT로 변환.

---

## 인트로 (0:00 ~ 0:30)

```
[아바타 + 타이틀 슬라이드]
```

**KO:**
안녕하세요, 로봇 엔지니어 헥세이치입니다.
오늘은 ZED X Mini 스테레오 카메라를 Jetson에 연결하는 과정을 공유합니다.
공식 문서에는 연결하고 SDK 설치하면 끝이라고 하는데, 저는 한 달 걸렸습니다.

**EN:**
Hi, I'm 0xH, a robotics engineer.
Today I'll share how I connected a ZED X Mini stereo camera to a Jetson board.
The official docs say just plug in and install the SDK. It took me 30 days.

---

## 목차 (0:30 ~ 1:00)

```
[PPT - 목차 슬라이드]
```

**KO:**
오늘 다룰 내용입니다.
첫 번째, GMSL2가 뭔지, 왜 USB처럼 안 되는지.
두 번째, 보드 3개, JetPack 4개 버전을 조합 테스트한 과정.
세 번째, 최종 동작하는 스택.

**EN:**
Here's what we'll cover today.
First, what GMSL2 is and why it doesn't work like USB.
Second, testing combinations of 3 boards and 4 JetPack versions.
Third, the final working stack.

---

## 문제 설명 (1:00 ~ 3:00)

```
[PPT - GMSL2 아키텍처 다이어그램]
```

**KO:**
ZED X Mini는 일반 USB 카메라가 아닙니다.
GMSL2라는 프로토콜을 사용합니다.
Gigabit Multimedia Serial Link의 약자인데요, 자동차 쪽에서 쓰는 고속 카메라 연결 방식입니다.

이게 뭐가 문제냐면, 보드에 GMSL2 디시리얼라이저가 있어야 하고,
JetPack 버전, ZED SDK 버전, ZED Link 드라이버 버전이 전부 맞아야 합니다.
하나라도 안 맞으면 카메라가 아예 인식이 안 됩니다.
에러도 안 뜹니다. 그냥 조용히 없는 겁니다.

**EN:**
The ZED X Mini is not a regular USB camera.
It uses a protocol called GMSL2.
That stands for Gigabit Multimedia Serial Link — a high-speed camera interface used in automotive.

The problem is, your board needs a GMSL2 deserializer,
and the JetPack version, ZED SDK version, and ZED Link driver version must all match.
If anything is off, the camera simply doesn't show up.
No error messages. It just silently doesn't exist.

---

## 시도 1: reComputer (3:00 ~ 7:00)

```
[PPT - reComputer 보드 사진 + 스펙]
```

**KO:**
처음에 Seeed Studio의 reComputer를 사용했습니다.
Jetson Orin NX가 탑재된 보드인데, 꽤 인기 있는 제품입니다.

```
[화면녹화 - JetPack 설치 + SDK 설치]
```

JetPack 6.0을 설치하고, ZED SDK를 깔았습니다.
zed-explorer를 실행하면...

아무것도 안 뜹니다.
카메라가 없다고 나옵니다.

```
[PPT - 실패 원인 분석]
```

원인을 찾아보니, reComputer는 GMSL2 커넥터가 FAKRA 방식입니다.
ZED X Mini의 GMSL2 핀 배열과 호환이 안 됐습니다.
이건 공식 문서 어디에도 안 써있었습니다.

**EN:**
I started with the Seeed Studio reComputer.
It has a Jetson Orin NX onboard and is pretty popular.

I installed JetPack 6.0 and the ZED SDK.
Running zed-explorer...

Nothing shows up.
It says no camera found.

After investigating, I found the reComputer uses FAKRA-style GMSL2 connectors.
They're not compatible with the ZED X Mini's GMSL2 pin layout.
This wasn't documented anywhere.

---

## 시도 2: Waveshare 보드 (7:00 ~ 12:00)

```
[PPT - Waveshare 보드 + 22-pin CSI 강조]
```

**KO:**
그래서 보드를 바꿨습니다.
Waveshare Orin NX 보드인데, 중요한 건 22-pin CSI 네이티브 커넥터가 있다는 겁니다.

```
[화면녹화 - JetPack 6.1 설치 → 실패]
```

JetPack 6.1로 시도했는데, 이번에도 카메라가 안 잡힙니다.
dmesg를 보면 디바이스 트리에 ZED 관련 엔트리가 없습니다.

JetPack 6.2로 올렸습니다.
이번엔 카메라가 잡히긴 하는데, 프레임이 안 나옵니다.

```
[PPT - JetPack 버전별 결과 비교표]
```

JetPack 6.2.1로 올리니까 드디어 됩니다.
ZED Link 1.4.0 드라이버가 L4T 36.4.0을 요구하는데,
그게 JetPack 6.2.1에 대응하는 버전이었습니다.

**EN:**
So I switched boards.
The Waveshare Orin NX — and the key feature is the 22-pin native CSI connector.

I tried JetPack 6.1, but the camera still wasn't detected.
dmesg shows no ZED-related device tree entries.

Upgraded to JetPack 6.2.
This time the camera appears, but no frames come through.

Finally, JetPack 6.2.1 works.
The ZED Link 1.4.0 driver requires L4T 36.4.0,
which corresponds to JetPack 6.2.1.

---

## 최종 해결 (12:00 ~ 15:00)

```
[PPT - 최종 성공 스택 표]
```

**KO:**
최종 동작하는 조합은 이겁니다.

| 항목 | 버전 |
|------|------|
| 보드 | Waveshare Orin NX (22-pin CSI) |
| JetPack | 6.2.1 (L4T 36.4.0) |
| ZED SDK | 5.2.1 |
| ZED Link | 1.4.0 |

설치는 딱 세 줄입니다.
sudo apt install zed-link
sudo apt install zed-sdk
zed-explorer

```
[화면녹화 - zed-explorer 실행 → depth 영상 출력]
```

depth 영상이 나옵니다. 한 달 만에 첫 프레임입니다.

**EN:**
Here's the final working combination.

| Component | Version |
|-----------|---------|
| Board | Waveshare Orin NX (22-pin CSI) |
| JetPack | 6.2.1 (L4T 36.4.0) |
| ZED SDK | 5.2.1 |
| ZED Link | 1.4.0 |

Installation is just three commands.
sudo apt install zed-link
sudo apt install zed-sdk
zed-explorer

There it is — a depth feed. First frame after 30 days.

---

## 정리 (15:00 ~ 17:00)

```
[PPT - 요약 슬라이드]
```

**KO:**
오늘 내용을 정리하면:

1. ZED X Mini는 GMSL2를 쓰기 때문에, 22-pin CSI 네이티브 보드가 필수입니다.
   FAKRA 방식 보드는 안 됩니다.

2. JetPack 버전과 ZED Link 드라이버 버전이 정확히 맞아야 합니다.
   현재 기준 JetPack 6.2.1 + ZED Link 1.4.0입니다.

3. 이 카메라의 실패 모드는 '침묵'입니다.
   에러가 안 나오기 때문에, 뭐가 틀렸는지 알기가 매우 어렵습니다.

**EN:**
Let me summarize today's key points:

1. The ZED X Mini uses GMSL2, so you need a board with native 22-pin CSI.
   FAKRA-type boards won't work.

2. JetPack and ZED Link driver versions must match exactly.
   Currently that's JetPack 6.2.1 + ZED Link 1.4.0.

3. The failure mode of this camera is silence.
   No error messages, which makes debugging extremely difficult.

---

## 아웃트로 (17:00 ~ 17:30)

```
[아바타 + 엔딩 슬라이드]
```

**KO:**
전체 트러블슈팅 과정과 코드는 StackPulse 블로그에 정리했습니다.
링크는 설명란에 있습니다.
다음에는 ZED SDK로 depth map을 추출하고 포인트 클라우드를 만드는 걸 해보겠습니다.
도움이 됐다면 구독 부탁드립니다.
헥세이치였습니다.

**EN:**
The full troubleshooting guide and code are on the StackPulse blog.
Link in the description.
Next time, I'll extract depth maps and create point clouds with the ZED SDK.
If this helped, please subscribe.
This was 0xH.
