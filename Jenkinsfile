pipeline {
  agent {
    docker {
      image 'node:7.6.0'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh '''node -v
npm -v
npm install'''
      }
    }
  }
}