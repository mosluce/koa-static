pipeline {
  agent {
    docker {
      image 'node:7.6.0-alpine'
      args '-v "$PWD":/usr/src/app -w /usr/src/app'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh '''npm install
npm test'''
      }
    }
  }
}