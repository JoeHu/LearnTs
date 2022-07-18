tsfile=$1
echo $tsfile
tsc $tsfile
if [ $? -eq 0 ]; then
	echo "tsc $tsfile success"
else
	echo "tsc $tsfile failed"
fi
basefile=`basename $tsfile .ts`
mv ./src/$basefile.js ./dist/ 