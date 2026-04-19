#!/bin/bash
# 心鉴智能官网 — 一键部署脚本
# 用法: ./deploy.sh

set -e

SERVER="root@70.39.195.121"
PORT=17997
REMOTE_DIR="/opt/1panel/apps/openresty/openresty/www/sites/xinjian-ai/index"
CONTAINER="1Panel-openresty-bHuZ"

echo "🔨 构建生产版本..."
cd "$(dirname "$0")/website"
npx nuxi generate

echo "📦 打包..."
tar czf /tmp/xinjian-web.tar.gz -C .output/public .

echo "🚀 上传到服务器..."
scp -P $PORT /tmp/xinjian-web.tar.gz $SERVER:/tmp/

echo "📂 解压并部署..."
ssh -p $PORT $SERVER "
  rm -rf $REMOTE_DIR/*
  tar xzf /tmp/xinjian-web.tar.gz -C $REMOTE_DIR
  docker exec $CONTAINER nginx -s reload
  rm /tmp/xinjian-web.tar.gz
"

rm /tmp/xinjian-web.tar.gz

echo ""
echo "✅ 部署完成！访问 http://70.39.195.121"
