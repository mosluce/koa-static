pipeline {
  agent {
    docker {
      image 'node:7.6.0'
      args '-v /usr/src/app -w /usr/src/app'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh '''pwd
ls -al'''
      }
    }
  }
}