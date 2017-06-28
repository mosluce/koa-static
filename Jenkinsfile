pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
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