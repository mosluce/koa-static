pipeline {
  agent {
    docker {
      image 'node:7.6.0'
      args '-v "$PWD":/usr/src/app -w /usr/src/app'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh '''pwd
ls -al /usr/src/app'''
      }
    }
  }
}