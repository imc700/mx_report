pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                    sh 'echo 66666'
                     nodejs("auto_nodejs"){
                        sh("node -v && npm -v")
                         sh 'npm install --registry=https://registry.npm.taobao.org'
                         sh 'npm run build'
                     }
                     sh 'docker build -t registry.cn-hangzhou.aliyuncs.com/rancher_k8s_ks02/k8s:vue_tools .'
            }
        }
         stage('PushImage') {
             steps {
                 sh 'docker login --username=himc700 --password=Hanxu7456 registry.cn-hangzhou.aliyuncs.com'
                 sh 'docker push registry.cn-hangzhou.aliyuncs.com/rancher_k8s_ks02/k8s:vue_tools'
                 sh 'docker rmi -f registry.cn-hangzhou.aliyuncs.com/rancher_k8s_ks02/k8s:vue_tools'
             }
         }
         stage('Deploy') {
             steps {
                 sh 'sh ./Start.sh'
             }
         }
    }
}

