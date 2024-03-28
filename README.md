# React Common Modules

### 환경 설정

해당 모듈을 설치하기 위해서는 패키지 참조를 `.npmrc`를 통해 설정해야 합니다.

우선 [Github PAT(personal Access Token) 발급 가이드](https://docs.github.com/ko/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)를 참고 하여 Token을 발급 받으시길 바랍니다.

그런 다음 프로젝트 루트 디렉토리에 `.npmrc` 파일을 생성하여 아래 내용을 입력해 주세요.

```npmrc
//npm.pkg.github.com/:_authToken={발급 받은 토큰을 입력해 주세요.}
@dnlwllms:registry=https://npm.pkg.github.com/
```

### 저장소 복제

```shell
git clone https://github.com/dnlwllms/react-common-modules.git
```

### 패키지 설치

```shell
yarn install
```

### 프로젝트 시작

```shell
yarn start
```