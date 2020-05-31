<template>
    <div id="daily">
        <div id="titlePart"
             style="
             width: 420px;
             height: 100px;
             margin-left: 30px;
             margin-right: 30px;
             margin-top: 60px;">
            <div style="background-color: #6d4c41;width: 37px;height: 5px"></div>
            <p style="font-size: 36px;color:#7b7b7b;text-align: left;padding-top: 0px;padding-bottom: 0px;margin-top: 5px;margin-bottom: 0px">
                31
            </p>
            <p style="font-family:fzFont;font-size: 36px;text-align: left;margin-top: 0px;color:#5d4037;">松果日报</p>
            <div style="margin-top: -117px;width: 200px;margin-left: -59px">
                <p style="font-size: 14px;font-family:fzFont;color:#5d4037;text-align: right;margin-bottom: 0px">PINEZONE</p>
                <p style="font-size: 14px;font-family:fzFont;margin-top: 0px;color:#5d4037;text-align: right;">DAILY</p>
            </div>

            <div style="width: 100%;height: 3px;background-color: #d9d9d9;margin-top: 58px">
                <div style="width: 75px;height: 3px;background-color: #6d4c41;"></div>
            </div>

            <div style="margin-top: -135px;width: 200px;margin-left: 217px">
                <p style="font-size: 20px;color:#838383;font-weight: 600;text-align: right;margin-bottom: 0px">2020/05/31</p>
                <p style="font-size: 12px;font-family:fzFont;margin-top: 10px;color:#a5a7a6;text-align: right;margin-bottom: 0px">PRODUCED</p>
                <p style="font-size: 12px;font-family:fzFont;margin-top: 0px;color:#a5a7a6;text-align: right;margin-bottom: 0px">BY</p>
                <p style="font-size: 12px;font-family:fzFont;margin-top: 0px;color:#a5a7a6;text-align: right;margin-bottom: 0px">PINEZONE</p>
                <p style="font-size: 12px;font-family:fzFont;margin-top: 0px;color:#a5a7a6;text-align: right;margin-bottom: 0px">COMMITTEE</p>
            </div>
            <div style="width: 60px;height: 2px;background-color: #d9d9d9;margin-top: -87px;margin-left: 250px"></div>

        </div>
        <div id="contentPart"
             style="
             width: 420px;
             height: 650px;
             margin-left: 30px;
             margin-right: 30px;
             background-color: #ffffff;
             box-shadow: 0 0 25px #dddddd;
             margin-top: 40px;">
        </div>
        <p style="color: #5d4037;font-weight: 500;font-family:fzFont;">· 2020年5月31日 ·</p>
    </div>
</template>

<script>
    export default {
        name: "daily"
    }
</script>

<style scoped>
#daily{
    width: 100%;
    height: 100%;
    background-color: #fcfafa;
    margin-top: -30px;
}
@font-face {
    font-family: fzFont;
    src: url(../../../assets/fz.ttf)
}
@font-face {
    font-family: syFont;
    src: url(../../../assets/sy.ttf)
}
</style>
