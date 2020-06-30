# collie-docs

* [Overview](#Overview)
  * [1 Movies Collector System](#1-Movies-Collector-System)
    * [API Application](#API-Application)
    * [CLI Application](#CLI-Application)
    * [Web Application](#Web-Application)
  * [2 Deployment](#2-Deployment)
    * [API Application](#API-Application)
    * [CLI Application](#CLI-Application)
    * [Web Application](#Web-Application)

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


![diagram](https://www.plantuml.com/plantuml/svg/0/lL9DJm8n4BsJy1z6BcAYxCMJ9maIDG4b2Y6UIBSxG9Dkk-bCMVptJdV1hnYzUUhqzVMzDzDU4wl0iRJTpebnsiO2OSjSqLMM1LKFDeQtCO-4GNl7w7YWVPcf8XZbTZPMCHjTNioiShoOJZAh68a5MeqIUy-3gf7kTYR3byV5VBMydz-j9kFRySDD_opXCmpaNJyPd4Dl8KjFrgNe4R27jN45A2ZzpY0egScN2Bn5CGgWTifObLjCL484mprHVNubnhAllRK6sureJfC6mKXGrEm3j2UGDP31v3kqrjS4EXABJ_Z3lfRP-CZWrCvi184S6Mj41uLPhp78jA3672grGVe8jXhlkQ-DmyfRG-8wEjOfmYo8MO7XbDxl3k2GIxeKRw0sEEcWAkdPhNqe5HllGEKfJnDNXAtN3KnjTBt58jeVavIuF-IGwlzIT3jFQ0zl_-srv2Sqb4JuUlHvSh-psgwEd6xd6btHVCSt)

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

## 2 Deployment

`/2 Deployment`

[Overview](#collie-docs)

**Deployment diagram API**

All the backend systems are hosted in AWS, only database it's hosted in MongoDB Atlas service.
CI/CD handle by jenkins & serverless framework

**AWS Technologies**: Route 53, CloudFront, S3, API Gateway, Lambda, Cloud Watch, Container Service, Code Build and EC2.

**Other main technologies**: Jenkins CI/CD, Dockers, Serverless Framework, Github hooks

**Scope**: A single software system.

**Primary elements**: Deployment nodes and containers within the software system in scope.

**Intended audience**: Technical people inside and outside of the software development team; including software architects, developers and operations/support staff.


## API Application

`/2 Deployment/API Application`

[Overview](#collie-docs)

![diagram](https://www.plantuml.com/plantuml/svg/0/TLLDR-8m4BtpAsOvx1Qf2rAxlUof45fAHRjieQhsX8pZ4Wl7Zco7b5trl--CavIlz88czdlpvil3jVFC-ZnLhIzISvN70XBlC_UprxEiwAwaJ_9bxeJbHdkXVPURjCTYAvdUg3pBUz6FxrF5j7z-cFGKyy9vF5eCHQRCDYL2HivRa_wVNy_pnSjuVhUOt8nk7eTddLPh1riycbYSeVFi7DfHxhn9XVtcO6bDWUfjF1qPir82eiJYtJaycBzIAGQtqefNyzRk_0De0KGO9vDQs3ENCMJDf2RMbAq4zBDCISwyD9eSthCDct4hCmzCn_0a6FTqFhLc8sFXW2a5vXLy8k0rrvnuJ4c_1M-0Lp4ws4X646cX4Ciwu6wxqte_JJ0rUcM6oxvNpA7IG_WSGFWcwJ5ZCypa88-ICnXhR9NcOaSBXEgqMQvi7zKk64Hu4fbnqXihXJjMidY7aFvqV83SDZjd1QNGVvdj1ux-Zd43njT2nmYgh5Bs5CWoES89AjYs30Aghng_7-eE6ncbf43uBlAHPLdoUu9X4-czrQYcMBgCQK8cmMWIAI7z31NCRJK0rTouC3SzydGV2b3Varqo0CTWWwDRHr55SXp7rINLskHUmDLb7SKkXjYaQ21a60noNnH5jpocrnZya_S6tx7O26NeIGrBwxFI2tw1e9leegaCU7alz5fgwdTbrSbH_QJEtyY8nhrek9VkgGp7dq4k5Gr3LDjDaX_0igyVMAWwN3cPuxg1hvKCdUii1KbFGgbpe0zQIAMbf4PBUDxjTezxyYJKHw6R9oiqAD08suZvP5h6UcFME-f-CVVBCRTojQeBwd3LuYPXF06UCBsYfrhn3olpYUOiD4S9v-3MibGKngvXchi4jsVj3XCdVs5BXXcycy-dOPHdWkTMGBNn4KguPgNJtOHRDCQMl5WPwaNKSgqSJD6TCMiAuXhN0Vu__0S0)

## CLI Application

`/2 Deployment/CLI Application`

[Overview](#collie-docs)

![diagram](https://www.plantuml.com/plantuml/svg/0/TLJ1Rk8m4BtdAxmSLaLgYLJjQK-5WDgiQ1THAhGdP9nHOk7OaUF0eXN_lZE9WG3X4isCvysRUV7ufNJSkYfNmJUfXQeIO9bpHVap32tV3LBficfTbM25qGwq6mYJXponakkjgeegZ7uypHJNxkjz6Yhke7GOMesXK6QV4w2Wui5q-EVtrsArZ1Tlg-daTV8nVkW7GN3EMtsO11voerCpNW-TukKZwxtNxeZLVWy3CUUVlVw_WB48--5IW_MOKQnn52tW3Ai1Fjhh1uTRkcOyJ7kj3GBCeJ2bTCPAAA-PB9vXIZIDBpBttSKJ8pPWvv3Aqjaz0iPrWA2pQgsaOCUpQvvB9DATIKz9Jt7EqpjZyHs9Drn-jYL3XkkyfR78WpcDqRHncmQ2oasYkjm4_uJ3ta-Di4-mMqaAD-ZRGPe1pjEZpuP5WRrJzY7e91NALCcIEv4HukHqiJWhqnHfZW44B9fG65cZBsHZEwaKMmFp86OqsZ87jjwpXEzFJT5t3ggZU7ieprDJ41MX3rrI9x05PGhIeR7kY_rSY_tSDIaU_WAzaPf-YBSOBkUsQM4gTVMtxYKEe_75A3VoucTKIPNKudYxY_AKwA_XqMN-GleY2rnyzjtJK5mNEPEqV4ezCdBeQMWi9JLQuCHWC6WrMUj6ahUdRFVP4dkAcm6QhIqN6HCProbjA-9f7QX6iweNUhqPiw4aEcxzmzldOmuymLcMLZhm-PSgTEtdh2ep10aB-0Wo3JicJdTE-bLjXYll5S2BISj5IjvYNq0d-9B-1m00)

## Web Application

`/2 Deployment/Web Application`

[Overview](#collie-docs)

![diagram](https://www.plantuml.com/plantuml/svg/0/VLHDJnin4BtdLqmvj22bYGJbqXEm2P0gG9GFePuYunqI5w-zyWS1AlvxPxmRaWrHSzYCxUStpvutFlD1k10BtVgYZDGnHrY6KFgVtQuJgyv2XMLyY1wTj2QW2HrfYwx8dHBcMSSoThCVtqTQc32x6NQr2EW3JSrxM6hxMl26aibRm_FVTxFf_7umlPuF-rVzszxXKQkrWSrlROw7H5wsuI2BFjW2tJSF3ywkAFl1qL-05a16AeGow0vfWUO9V54ZABooTg4HigMZtMsuiMzAQm6Nok6ZVJauQhr_JbcTa3UdW6d6M5glWdKAFILkf7MqHf3pqQ21VDrFBbQUmVSJ1W-4c30TyUtYBlkqVkae2_HDNeC-mwIsqUG9nxUq6LKg-RTHAeLSuXY53ETbkjJUBQl8U3g7HwNvS6dN-zva_eJGavDzrFvaY_SYoYSCJ3q98YXPKzDu6GhTXZyUXCb1-aswz3T6lQknmJlpo2HtJYsKILlVzrtTASiSsnWGJZ_4RgJcjg208BqKCEDgjUfKqspccZcvQvSxnsVKbiNqgcZDlmj4UKoWVdQyxxPeyHUQ9sNO2tK4vDZdohH3PU9BgioWc_N-Mn99dukeTCxeTRotzkj5ykas5chVrYHJwbRuMgVXULCMGEg2q5Gu7d0_Lv5MR3eCijFfD4Ho7RUFk2roIiLRh8_fwVsWVgQIWrmAiwZzbwhA9EjIxHet5JT1asKQHsiuPXJz1pK42pPP1sg3fWPbXlNBaPnpFPsEKdTEK4Q7K3zpX6PerUsD0bvR-yJ2pz3azBBz0m00)