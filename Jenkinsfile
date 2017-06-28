pipeline {
  agent {
    docker {
      image 'node:7.6.0-alpine'
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