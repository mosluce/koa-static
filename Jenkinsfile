pipeline {
  agent {
    docker {
      image 'node:7.6.0'
      args '-v "$WORKSPACE":/usr/src/app -u node'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh '''cd /usr/src/app
pwd
npm install
npm test'''
      }
    }
  }
}