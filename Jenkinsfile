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
}