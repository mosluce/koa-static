pipeline {
  agent {
    docker {
      image 'node:7.6.0-alpine'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh '''node -v
npm -v'''
      }
    }
  }
  environment {
    DOCKER_OPTS = '-v "$PWD":/usr/src/app -w /usr/src/app'
  }
}