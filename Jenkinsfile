pipeline {
  agent {
    label 'jenkins-worker-ondemand'
  }

  stages {
    stage('build') {
      steps {
        echo 'building the application...'
      }
    }

    stage('test') {
      steps {
        echo 'testing the application...'
      }
    }

    stage('deploy') {
      steps {
        echo 'deploying the application...'
      }
    }
  }
}
