pipeline {
  agent {
    dockerfile {
      filename '.'
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