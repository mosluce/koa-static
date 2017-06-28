pipeline {
  agent {
    docker {
      image 'node'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh '''pwd
npm install
npm test'''
      }
    }
  }
  environment {
    DOCKER_OPTS = '-v "$PWD":/usr/src/app -w /usr/src/app'
  }
}