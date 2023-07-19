## MockTest- Frontend (Angular)
This is `MockBook` exam portal developed by Angular16.0, all router path are protected with AuthGuard with token value and interceptor has token in header
so that every request authorize from backend Bearer token value.
see backend from this `[https://github.com/abhinav8949/mockbook-Backend.git]`.

#### Functionalities
* Application is fully secured with AuthGuard based authentication on frontend side and getting data from springboot server.
* There is role based login in application where users has login as NORMAL USER or ADMIN USER.
* Login with google is implemented using firebase and OAuth2.
* Secured Registration of user.
* Admin has access performs operations such as Create, Read, Update and Delete.
* Users has only access to View Questions related API response on dashboard.
* User start any quiz from anyone category and attempt test and submit to see his/her result.
* In the duration of test user Web Camera enabled recording is streamed and sync data to firestore.
* Version2.0 of this test portal is under working with fully implemented architecture where more functionality are integrated.

### Requirements
* `Node18.0(LTS)`, `Angular16.0`, `Vs-Code`.
* Clone this project in local folder.
* Open cmd and run `npm install` to install all necessary dependencies.
* Run `ng serve` in cmd hit `http:localhost:4200`.
* Make sure your springboot backend is running.

### Screenshorts
#### User UI (ROLE_NORMAL)
<img width="949" alt="1" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/bbe2c2c7-40cb-4edd-a57a-baeffe5a5186">
<img width="944" alt="2" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/9c27bbc6-fedb-4a35-96f7-1c723cdf8a69">
<img width="947" alt="3" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/184ec6c7-ad0b-431b-b44d-c2b841a6018d">
<img width="951" alt="4" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/799c0f80-5274-4df3-8be7-701e4266fee1">
<img width="947" alt="5" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/fa73ae90-84e7-4345-bc71-9fb6cdbecf2b">
<img width="947" alt="6" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/6dc1e180-375c-4e54-88a3-7eca2b0fc2f5">
<img width="944" alt="7" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/3b08543d-69c4-4e74-9625-6a5c6d1e1ebc">
<img width="946" alt="8" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/863ba98f-2d24-47ab-8b95-7f02a6583b4a">
<img width="947" alt="9" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/42ef6b85-c555-453d-8d3a-b761c74c1960">
<img width="746" alt="10" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/2228aa19-4d59-484b-b043-1642c37b3a7e">
<img width="947" alt="11" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/ad338a3b-d5e8-4f6e-bb02-1cb8e4d781ad">
<img width="947" alt="15" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/2c71e671-8231-47e2-b296-c595a643a1fc">
<img width="947" alt="16" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/c1cce9b0-7346-4dd9-b4e8-e6161db49f31">
<img width="519" alt="12" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/1d248b16-a95c-40e3-9856-4f01b2dd6df2">

#### Admin UI (ROLE_ADMIN)
<img width="946" alt="001" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/eee36fd8-ecd7-423a-b450-d096254165f0">
<img width="946" alt="002" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/80a30684-459c-48b1-a951-f0ea5916d092">
<img width="943" alt="003" src="https://github.com/abhinav8949/mockbook-frontend/assets/63671705/67608097-b37b-424b-af76-58024dc22ad4">

#### ****** Thanks******


