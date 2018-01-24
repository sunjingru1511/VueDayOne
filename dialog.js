class Dialog {
     constructor (tit = '标题', con = '新的一天', left = '确定', right = '取消') {
          this.tit = tit;
          this.con = con;
          this.left = left;
          this.right = right;
          this.init();  
     }
     init () {
         this.createWrap();      
     }
     createWrap () {
          document.body.className = 'wrap';// 遮罩层
          let tit = this.createTit();
          let box = document.createElement('div');// 父盒子
          let main = this.createContent();
          
          box.className = 'box';
          box.append(tit);
          box.append(main);
          document.body.append(box);
          

     }
     createTit () {
         let tit = document.createElement('h3'); // 标题
         let span = document.createElement('span');
         tit.className = 'tit';
         tit.innerHTML = this.tit;
         span.className = 'span';
         span.innerHTML = 'X';
         tit.append(span);
         span.addEventListener('click', () => {
             this.hide();
         })

         return tit;
     }
     createContent () {
         let main = document.createElement('div');
         let con = this.createCon();
         let left = this.createBtnLeft();
         let right = this.createBtnRight();
         main.className = 'main';
         main.append(con);
         main.append(left);
         main.append(right);
         return main;

     }
     createCon () {
         let con = document.createElement('div');
         con.className = 'con';
         con.innerHTML = this.con;
         return con;
     }
     createBtnLeft () {
         let left = document.createElement('button'); // 左边按钮
         left.className = 'left';
         left.innerHTML = this.left;
         left.addEventListener('click', () => {
             this.hide();
         })
         return left;
     }
     createBtnRight () {
        let right = document.createElement('button'); // 左边按钮
        right.className = 'right';
        right.innerHTML = this.right;
        right.addEventListener('click', () => {
            this.hide();
        })
        return right;
    }
    hide () {
        let wrap = document.querySelectorAll('.box')[0];
        wrap.style.display = 'none';
        document.body.style.background = '#fff'
    }
   
}
new Dialog("我是标题！", "内容内容内容内容", "确定", "取消");