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
        sh '''npm -v

cd /usr/src/app

ls -al'''
      }
    }
  }
}