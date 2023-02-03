pipeline {
    agent any 
    environment {
      DOCKERHUB_CREDENTIALS = credentials('valaxy-dockerhub')
    }
    stages { 
      stage('Git Checkout') {
            steps {
                echo 'git pull'
                git branch: 'main', credentialsId: 'b7c98940-a88a-4960-bdb8-6585edcb9ba3', url: 'https://github.com/umesh2645/pfc.git'
            }
        }
        stage('Build docker image') {
            steps {  
                sh 'docker build -t umesh2645/pfc:$BUILD_NUMBER .'
            }
        }
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push umesh2645/pfc:$BUILD_NUMBER'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }
}