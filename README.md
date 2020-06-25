# collie-docs

- [Overview](#Overview)
  - [1 Movies Collector System](#1-Movies-Collector-System)
    - [API Application](#API-Application)
    - [CLI Application](#CLI-Application)
    - [Web Application](#Web-Application)

---

## Overview

> &#x1F4D7; Software Architecture based on [C4Model](https://c4model.com/)

**Level 1: System Context diagram**

At México, CDMX there are two mainly branded offering theaters, [Cinepolis](https://cinepolis.com/) and [Cinemex](https://cinemex.com/), the system will collect information from both websites and put it together in a simple Web UI so the user don't have to look for the same movie into two different web pages.

So Movies Collector System is intended to help anyone to find an scheduled movie and their details as date, time, location, distance, duration and of course which brand is offering it.

**Scope**: A single software system which will be "serverless" and will be handle it by CI/CD.

**Primary elements**: Our users will be anyone looking for a movie and some theater to go to watch it.
[Cinepolis](https://cinepolis.com/) and [Cinemex](https://cinemex.com/) both are Mexican movie theater chain with theaters around all the country.

**Intended audience**: Everybody, both technical and non-technical people, inside and outside of the software development team.

![diagram](https://www.plantuml.com/plantuml/svg/0/lLB1JW8n4BsJy0yZ5p5HzkB94mQ9ce0IXH1FfDiTe4cttNIcBFwzqrq8QjIZftPVtxptPdQ6n2fmB6stSsQSjh50s39NT9DbGTM3ZU5jp2DXqDunEXveNsQg24QvdOrLp4RNLpEh72-caymgHcA1LgF4tlEWQgIxdSdjs_DYlbe-pXzMa_7z-EckVv7m6GRohfyCBg6taACdvrBq2DZ3shW256oyBw3qEuEW121V8l0MnIs0sYbZLMunyGaH3FT4-lMT6Ck-zjOQR3z4U9eq24Q2ecOVe7s1h84C9lDRQtrDe2En-8HZXb_iQncGZmnExSn64CYHiKPqK9Zr6eEC3AeWjOLq2ZNcKAaDqYdYQhpdlZOEAsyDYV_eU4zXPeVIyrFj00u9fLz90TIsG3geIhftQnzAnSOxK7bArWGNOUjr0rFRXDvY4UsFIKhS7tB8xVzIT3ilQ0-hyEs_oM8qb4Ju-lHvSd-psgwEd6vdYAvejlC3)

## 1 Movies Collector System

`/1 Movies Collector System`

[Overview](#collie-docs)

**Level 2: Container diagram**

**Scope**: A single software system.

**Primary elements**: Containers within the software system in scope.
Supporting elements: People and software systems directly connected to the containers.

**Intended audience**: Technical people inside and outside of the software development team; including software architects, developers and operations/support staff.

**Notes**: This diagram says nothing about deployment scenarios, clustering, replication, failover, etc.

![diagram](https://www.plantuml.com/plantuml/svg/0/lLHDRzim3BtxLt0vR0dGsPUTTcgQ5lr0qdbrYcAdW9PPMu0i6PASjXZstqV9Jk4sGB7JSh05vl7naO_ogVDeVT-gv9FKGlKLGUDzvxvdcSMdj9Q-wSlUaHL6Uz8-5QRDiB8IzLxrNP-jldtD5Mf_lrbd2Zqvpw7TYj4eDTcq2zp9Uldhn_rszt2zlTgjBoulRi_dYoJ9oJgZvu7-16Rt_9hn-u7P77W3Zr9NW50RKq5hzf80EU1CI-0RubeMS8zIOQaeu1qHI3zR9CMByzJkBfxzNB28pYZfc7XrE8SgkMN6YkmN1qzKGeSrfR1KoZp5sbm0NAG19onspAmVZMtHIwC1IzFxGHCJAoDYs0twH4DLhyWT2sdfUPJ1f_yjuipqkaBxCXT6AKw9KTQmYGImuYW9RomCUCXYID9i0RyJuD-hftDBA3nsNJ2BPI-xJicXUcZgd9JSixE3VCzn0UFsH6qnB7NDfeM60IVfYtULi9FCkColtnUvOUTv9hBp9t1hAhef8lUI_LK62hBxOPd62R-EisNUmqmVUoq27ohfNs0laPVjaiVS_5m3bpmI8rGGirh_gvYyxpho7-Yeq6E9ZjZ-KTBKNzzOqzVDO3rxJy_CnMB3geJ1kIE1LHd6FvA6ghS6xaZXq2GS_e62jwF5-SResfoNYu0is7bMTzYcyNxngRIXbJTxvu9mOf1i-QcnZMUlA6nXRMBlv4MQfgmmIcGHawKPJENh7Y_YEF7iQhlDYx6bW8-esD41UKTOEVWC3rPwcY2ZBqV8Ty2twEbduP1K35ViQhjPGpwPxvkauGf_bF8d2Gd3DsroKMBA8ZabNOKluby0)

## API Application

`/1 Movies Collector System/API Application`

[Overview](#collie-docs)

**Level 3: Component diagram**

**Technologies**: Javascript and NodeJS as runtime environment.

**Other main technologies**: Apollo server, graphql and serverless framework.

**Scope**: A single container.

**Primary elements**: Components within the container in scope.
Supporting elements: Containers (within the software system in scope) plus people and software systems directly connected to the components.

**Intended audience**: Software architects and developers.

![diagram](https://www.plantuml.com/plantuml/svg/0/lLLDSzem4BtxLsmvj313uT9JJw4aau-1b0QOJ4_CsbwmfhBaIZ99ffF_dfLa4qFI7ii1nFhjxjlTj_APTMXSNShaWr2Ph7E2mhdAVXsF3JwCTi8LTLfRCfbMZfGRPReSOsu4ghsigtey_V9v8L6vzNmsbkZ8EZPjfhgijFBuoiTEPfEVtzUhpVtrwcepkxYyk3tl3v9aGSPgrVVXXz1Ryq-FV-yvcWMdOIjK3WWxhNCezLuG81kiBWbSGPpB0EvHI4mbURmb0k5wWsJvP1sLcuj7ry-4eafBOJdmj3txB0l34NCodomyK0eLxcW44odrGyZD2S26C60pWnL7LbjjIdH2Ay1Krovoui1IPy5i8x-ieBoMPDyIAUcneS6d_qtYcwvLZkQfdsafsILOcSCy180fMobpsa34mpYO1FK6y2S1_anP0SZSJTyGPWwhoW-BQK-gIegOtHTrJbBiURAHlcDx1erw0hTW5ch7G_C50tRS1yUPNabZ9JZqP75zbAsb5fqQoJ6MYMiF3mTOajb7QLro4uiViuubd0xqNA7hUbT0YxCHDtWdYI6hfI-JWzorvn2HMryYvCJo5QyzuN_4myf9nWcL-8lWTqt6-UutmyxHOOesgDcGCuAON6eOFsmbttZ7eNNay2v9hak5eSRruYbpyC1oXa-n0NU4ETHAR0NbH_BQ6bqUa_A93wp2eXrItf4yjBtR6P-qmyp3EezFwJN8vnEvPTBFVZgxFbNQ3Qy_BuQet11kkRKtoy1nKLSLkLXUis673fSSyb0HhrspNjt2NM6q5q5OETuvUkHO2gLVKIzOUwhIVfxw4JT1VTPRxKiDuTYlVG9H6lsvLZjzdWw2MhXwPjTkSJlaOPpwyRvRJvmO94h-LbY6ivFajt-dG-taij5er31CNdlUBcpSetMZWaRduwlLQh5idE8e6HMgQf5U9XO-mhqHZZh8C9itoBy1kxTnYr_6c-rgDP_1ejFU8wTuS_xBvJdn3l5LqhcV6bcTaShzY-W5)

## CLI Application

`/1 Movies Collector System/CLI Application`

[Overview](#collie-docs)

**Level 3: Component diagram**

**Technologies**: Javascript and NodeJS as runtime environment.

**Other main technologies**: Puppeteer

**Scope**: A single container.

**Primary elements**: Components within the container in scope.
Supporting elements: Containers (within the software system in scope) plus people and software systems directly connected to the components.

**Intended audience**: Software architects and developers.

![diagram](https://www.plantuml.com/plantuml/svg/0/lLLDRnen4BtpAwOSMf1IkFJKKoX4-H19QI2AUefclHEmvBKjsmk9glptZkqbNJQafweSOB77RvxVl9azzG5Tg2lL-o2rK7L9i0d1-g_ZiSFTQ2t3fYvgJquO7KY7aJ3L64idKMzLRUlnzCldXK8TxgxdOuM1VE2bXwcfhD4ntaRitdpoy_lTwk7-SdNnC3yxFxkP3OQzteASDteGuK-WVyS_VVwzPpGFmS2Zr2KWh8qfeJ9RIO2yu4r543R4kHpW5gN2Gb6CzqGWGt_OMpxxGDN3sLCO2Ad96YKz0q_tpp7BmZ5YIUwJXnqLO75D8vWePNOfDoS0ds302uUMaVMZSHK6QJHWOUgGEJ6mCY8j-ynFRAYi5VctH2fwQcZmq_ycyStKkaJtF116AJwILfd3TGA0AQ-I2CP1ZeTnMfBK7yAl7l1doWv0vku6Zb04j3OMYsbFh5KoPu-Ncf6IMwvifXzuNK3ZdiGjBKkzvgB52mEsZWyxcT1AHfmiBhj9hhZoh8cquGHkJ4bNouGzuVeg0qjossocHk5NEIl6tMlwM6iHyL39y0nRYMosSvPvysCEdB9BfgMWYgocyqDMUvtoeSR_WrGucmo-eih65ecyvlYS2Sw8RSxsRVPOai36rgC8KSKgYrnLvb_mBhbeWFYFdeBZJK2bG1ELLBRTqP0_v28vnxJL49Vydwsemwki1osop9wxM5tFOSU30CXR4lAHw-cYjvBYbiU75BL21zFbadimkyZ_bK1kXEFfczRuzydPWpfjvrd3baV-FYZ6BGbYxvPGQyvqg6XEoBwMFl2OuQt6KYK6B1YAaxvclINLgdnNzvYzHV5uSDReI6W7hNkjTw8Jt3knBvskAujepFsr-Fd6H2pCpGBx7LZobAbmS6tqsioAOIeRWxEq-wdKp6b-AbpKxq1F7wKZ3f8LVskiqdDG5AVPsYJ1AOZHQDJmxEqlzMS0vG5nrnIowTxnnMgrM3Q7OdoAIhVQHzuIbXu-mhsJWLgHgRNVHBuNABf5xHXtmVFD7plKAkuxHrvwyK1-DRRcRLErKz9bVB7-1W00)

## Web Application

`/1 Movies Collector System/Web Application`

[Overview](#collie-docs)

**Level 3: Component diagram**

**Technologies**: React, Apollo client and react95.

**Scope**: A single container.

**Primary elements**: Components within the container in scope.
Supporting elements: Containers (within the software system in scope) plus people and software systems directly connected to the components.

**Intended audience**: Software architects and developers.

![diagram](https://www.plantuml.com/plantuml/svg/0/lLLDRzf04BtxLqmvj22bSEcffr8IXKIG4Y2AUa9ZUy2hhdVTtJK1LVdldTsr-H1jr5Cvu6NyvisRh-MBTMXSNShadL2Ph7E2mhdAVXuC3BxqDy8LTLfRCfbMZfJhPxeSO6u4ggsigtem-lHn9b6vf-ba8D6HTMnQZNHPQUNnbUTE9iFltvwMg-UxvNWrkRczURZkzf9aHiPgrVNqLz1vuaU7dy_CPi5fM0kL0y96wnnAlHK4o0QhIm9N4CSoW5iK4bD97c-9GBXEBrdihQDoTRDptKmeghGKbeb7xTb7cHbcpCbyiF12ALIueJuCfTGl8JO701jem6O6AsPMQsrAT48hm5JNBcfYOgcpOBPHNrPGNakobq9AsZKo-FI_HNpLjShHxBkPbf9TWfKrJ0C1ZDXAcTC68Xu6mIIequDV2V1dn1E0hDqSgGnXvh2gVDTO_x2gf8Wo3bxHiva6ZjsSGZyEFs8joF8vvZR1VHo6EIckprdUJM7yr71sbp4AhNzu-h5_Uex7cenFCIUUA17KiVNQ_oBusRpqLQCTPRKZ-2CjykX8pOx3S80HrqOvptJBhIaU9oUMEJactH8qMmDheqjeSIny6xGVein9dfMcJO5Nmfw8yR3crK7D2UJrl4siM7Yvixkpnh3fdjU61qfKxWeUT4xtYv1-azWYoZkEvs4MI-Pj1t9TgyppeHHk3rk1lAbjWXooaNGKaqalPZJvLp6pkgh8lQ4ZHuSfMkBTQIIT3KbXTBqfujxmuj2EkLYitpE_PlP2O9xweMX8VTG7xGkECKbety22Lwl4xbIhZRvEUnwvuBLXTUqgDfSJdrBZKpbRMkk54uD4oTyAot1salmARtISGvVr-_r6OT9s_hXiiR6XyyVn6uoNozcYSVBuW0fPjSWvOMxXFJmRuUW46NfpWVmRyFHARV6BU3sDbzC9p4xAU-OKhx-tN5uJxn3_3qxkbcR6l_1TuFzDVWC0)

// TODO
// Config Google Maps Api Key
// All error pages/states
// Groups details movies by brands dynamically
// Fix nav bar size
