module.exports = {
  apps: [{
    name: 'cute-babay-plan',
    script: './index.js', // 要运行的脚本的路径。
    output: './logs/pm2/pm2.output.log',
    error_file: './logs/pm2/pm2.error.log',
    out_file: './logs//pm2pm2.combined.outerr.log',
    merge_logs: true, // 集群的所有实例的日志文件合并
    log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS',
    instances: '1', //  进程数 1、数字 2、'max'根据cpu内核数
    watching: true,
    exec_mode: 'cluster',
    env_development: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
