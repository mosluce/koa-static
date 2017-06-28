pipeline {
  agent {
    docker {
      image 'node:7.6.0'
      args '-u root'
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