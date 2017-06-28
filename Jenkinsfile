pipeline {
  agent {
    docker {
      image 'node:7.6.0'
      args '-u 1000'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh 'ls -al'
      }
    }
  }
}