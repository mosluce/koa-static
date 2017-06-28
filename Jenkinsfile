pipeline {
  agent {
    docker {
      image 'node'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh '''whoami
npm install
npm test'''
      }
    }
  }
}