


var app = new Vue({
    el: '#vueArea',
    data:
    {
        level:{
            base:1,
            up:0,
            bonus:0,
            rate:0,
            badgeUp:false,
            badgeChange:false,
        },
        hp:{
            base:0,
            up:0,
            bonus:0,
            rate:0,
            badgeUp:false,
            badgeChange:false,

        },
        atk:{
            base:0,
            up:0,
            bonus:0,
            rate:0,
            badgeUp:false,
            badgeChange:false,
        },
        crt:{
            base:0,
            up:0,
            bonus:0,
            rate:0,
            badgeUp:false,
            badgeChange:false,
        },
        speed:{
            base:0,
            up:0,
            bonus:0,
            rate:0,
            badgeUp:false,
            badgeChange:false,
        },
        luck:{
            base:0,
            up:0,
            bonus:0,
            rate:0,
            badgeUp:false,
            badgeChange:false,
        },
        def:{
            base:0,
            up:0,
            bonus:0,
            rate:0,
            badgeUp:false,
            badgeChange:false,
        },
        magic:{
            base:0,
            up:0,
            bonus:0,
            rate:0,
            badgeUp:false,
            badgeChange:false,
        },

        nameVal: '',
        rateNum: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],
        showPage :1,
    },

    methods: {
        levelUp: function (event) {
        // メソッド内の `this` は、 Vue インスタンスを参照します
            this.badgeHideWrapper();
            if( (Number(this.level.base) + Number(this.level.up)) < 20 )
            {
                this.level.up++;
                this.statusUp(this.hp , 60);
                this.statusUp(this.atk , 30);
                this.statusUp(this.crt , 30);
                this.statusUp(this.speed , 30);
                this.statusUp(this.luck , 30);
                this.statusUp(this.def , 30);
                this.statusUp(this.magic , 30);
            }
            else
            {
                alert("レベルが最大値です。");
            }
        },

        statusReset: function (event) {
            this.badgeHideWrapper();
            this.level.up = 0;
            this.hp.up = 0;
            this.atk.up = 0;
            this.crt.up = 0;
            this.speed.up = 0;
            this.luck.up = 0;
            this.def.up = 0;
            this.magic.up = 0;
            alert("リセットしました。");
        },

        classChange: function (event) {

            this.badgeHideWrapper();
            this.level.up = 0;
            while(true)
            {
                if( (Number(this.level.base) + Number(this.level.up)) == 1 )
                {
                    break;
                }
                this.level.up = Number(this.level.up) - 1;
            }

            this.classBonus(this.hp);
            this.classBonus(this.atk);
            this.classBonus(this.crt);
            this.classBonus(this.speed);
            this.classBonus(this.luck);
            this.classBonus(this.def);
            this.classBonus(this.magic);
        },

        badgeHide: function (status) {
            status.badgeChange = false;
            status.badgeUp = false;
        },

        statusUp: function (status , limit) {
            var check = Math.floor(Math.random () * 100) + 1;            
            if(Number(check) <= status.rate)
            {
                if( (Number(status.base) + Number(status.up)) < limit)
                {
                    status.up++;
                    status.badgeUp = true;
                }
                else
                {
                    status.badgeUp = false;
                }
            }

        },

        classBonus: function (status) {
            if(status.bonus > 0)
            {
                status.up = Number(status.up) + Number(status.bonus);
                status.badgeChange = true;
            }

        },

        badgeHideWrapper : function () {
            this.badgeHide(this.level);
            this.badgeHide(this.hp);
            this.badgeHide(this.atk);
            this.badgeHide(this.crt);
            this.badgeHide(this.speed);
            this.badgeHide(this.luck);
            this.badgeHide(this.def);
            this.badgeHide(this.magic);
        },
    },

})