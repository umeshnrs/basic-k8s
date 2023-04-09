```sh
1. npm install
2. npm start
```

The application is running on [localhost](http://localhost:3005).


---------Docker access key
dckr_pat_DJiEclTyvNs6UB0IAqRu-RrOMtM

--kubectl 
kubectl create secret docker-registry regcred --docker-server=https://index.docker.io/v1/ --docker-username=ume --docker-password=dckr_pat_DJiEclTyvNs6UB0IAqRu-RrOMtM --docker-email=ume@gmail.com


--refresh
kubectl replace --force -f .\deployment.yml
