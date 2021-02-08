# 第一次关联两个仓库
echo -e "\n== init =="
git init
git add .
git commit -m "first commit"
echo -e "== init end ==\n"

git remote add github git@github.com:uphg/resume.git
git remote add gitee git@gitee.com:uphg/resume.git

echo "== push Github =="
git push github master:master
echo -e "== push Github end ==\n"

echo "== push Gitee =="
git push gitee master:master
echo -e "== push Gitee end ==\n"
