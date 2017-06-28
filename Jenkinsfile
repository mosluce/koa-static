pipeline {
  agent {
    docker {
      args '-v "$PWD":/usr/src/app -w /usr/src/app'
      image 'node'
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