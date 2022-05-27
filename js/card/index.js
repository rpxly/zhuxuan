var Card = (function (window) {
    //自动播放API音乐

    var table = [
        "K", "Potassium", "#39.948", 1, 1,
        "Ca", "Calcium", "#40.078", 2, 1,
        "Sc", "Scandium", "44.955912", 3, 1,
        "Ti", "Titanium", "#47.867", 4, 1,
        "V", "Vanadium", "#50.9415", 5, 1,
        "Cr", "Chromium", "#51.9961", 6, 1,
        "Mn", "Manganese", "54.938045", 7, 1,
        "Fe", "Iron", "#55.845", 8, 1,
        "Co", "Cobalt", "58.933195", 9, 1,
        "Ni", "Nickel", "#58.6934", 10, 1,
        "Cu", "Copper", "#63.546", 11, 1,
        "Zn", "Zinc", "#65.38", 12, 1,
        "Ga", "Gallium", "#69.723", 13, 1,
        "Ge", "Germanium", "#72.63", 14, 1,
        "As", "Arsenic", "#74.9216", 15, 1,
        "Se", "Selenium", "#78.96", 16, 1,
        "Br", "Bromine", "#79.904", 17, 1,
        "Kr", "Krypton", "#83.798", 18, 1,
        "K", "Potassium", "#39.948", 1, 2,
        "Ca", "Calcium", "#40.078", 2, 2,
        "Sc", "Scandium", "44.955912", 3, 2,
        "Ti", "Titanium", "#47.867", 4, 2,
        "V", "Vanadium", "#50.9415", 5, 2,
        "Cr", "Chromium", "#51.9961", 6, 2,
        "Mn", "Manganese", "54.938045", 7, 2,
        "Fe", "Iron", "#55.845", 8, 2,
        "Co", "Cobalt", "58.933195", 9, 2,
        "Ni", "Nickel", "#58.6934", 10, 2,
        "Cu", "Copper", "#63.546", 11, 2,
        "Zn", "Zinc", "#65.38", 12, 2,
        "Ga", "Gallium", "#69.723", 13, 2,
        "Ge", "Germanium", "#72.63", 14, 2,
        "As", "Arsenic", "#74.9216", 15, 2,
        "Se", "Selenium", "#78.96", 16, 2,
        "Br", "Bromine", "#79.904", 17, 2,
        "Kr", "Krypton", "#83.798", 18, 2,
        "K", "Potassium", "#39.948", 1, 3,
        "Ca", "Calcium", "#40.078", 2, 3,
        "Sc", "Scandium", "44.955912", 3, 3,
        "Ti", "Titanium", "#47.867", 4, 3,
        "V", "Vanadium", "#50.9415", 5, 3,
        "Cr", "Chromium", "#51.9961", 6, 3,
        "Mn", "Manganese", "54.938045", 7, 3,
        "Fe", "Iron", "#55.845", 8, 3,
        "Co", "Cobalt", "58.933195", 9, 3,
        "Ni", "Nickel", "#58.6934", 10, 3,
        "Cu", "Copper", "#63.546", 11, 3,
        "Zn", "Zinc", "#65.38", 12, 3,
        "Ga", "Gallium", "#69.723", 13, 3,
        "Ge", "Germanium", "#72.63", 14, 3,
        "As", "Arsenic", "#74.9216", 15, 3,
        "Se", "Selenium", "#78.96", 16, 3,
        "Br", "Bromine", "#79.904", 17, 3,
        "Kr", "Krypton", "#83.798", 18, 3,
        "K", "Potassium", "#39.948", 1, 4,
        "Ca", "Calcium", "#40.078", 2, 4,
        "Sc", "Scandium", "44.955912", 3, 4,
        "Ti", "Titanium", "#47.867", 4, 4,
        "V", "Vanadium", "#50.9415", 5, 4,
        "Cr", "Chromium", "#51.9961", 6, 4,
        "Mn", "Manganese", "54.938045", 7, 4,
        "Fe", "Iron", "#55.845", 8, 4,
        "Co", "Cobalt", "58.933195", 9, 4,
        "Ni", "Nickel", "#58.6934", 10, 4,
        "Cu", "Copper", "#63.546", 11, 4,
        "Zn", "Zinc", "#65.38", 12, 4,
        "Ga", "Gallium", "#69.723", 13, 4,
        "Ge", "Germanium", "#72.63", 14, 4,
        "As", "Arsenic", "#74.9216", 15, 4,
        "Se", "Selenium", "#78.96", 16, 4,
        "Br", "Bromine", "#79.904", 17, 4,
        "Kr", "Krypton", "#83.798", 18, 4,
        "Rb", "Rubidium", "#85.4678", 1, 5,
        "Sr", "Strontium", "#87.62", 2, 5,
        "Y", "Yttrium", "88.90585", 3, 5,
        "Zr", "Zirconium", "#91.224", 4, 5,
        "Nb", "Niobium", "92.90628", 5, 5,
        "Mo", "Molybdenum", "#95.96", 6, 5,
        "Tc", "Technetium", "(98)", 7, 5,
        "Ru", "Ruthenium", "#101.07", 8, 5,
        "Rh", "Rhodium", "#102.9055", 9, 5,
        "Pd", "Palladium", "#106.42", 10, 5,
        "Ag", "Silver", "#107.8682", 11, 5,
        "Cd", "Cadmium", "#112.411", 12, 5,
        "In", "Indium", "#114.818", 13, 5,
        "Sn", "Tin", "#118.71", 14, 5,
        "Sb", "Antimony", "#121.76", 15, 5,
        "Te", "Tellurium", "127.6", 16, 5,
        "I", "Iodine", "126.90447", 17, 5,
        "Xe", "Xenon", "#131.293", 18, 5,
        "Cs", "Caesium", "#132.9054", 1, 6,
        "Ba", "Barium", "#132.9054", 2, 6,
        "Ba", "Barium", "#132.9054", 3, 6,
        "Hf", "Hafnium", "#178.49", 4, 6,
        "Ta", "Tantalum", "180.94788", 5, 6,
        "W", "Tungsten", "#183.84", 6, 6,
        "Re", "Rhenium", "#186.207", 7, 6,
        "Os", "Osmium", "#190.23", 8, 6,
        "Ir", "Iridium", "#192.217", 9, 6,
        "Pt", "Platinum", "#195.084", 10, 6,
        "Au", "Gold", "196.966569", 11, 6,
        "Hg", "Mercury", "#200.59", 12, 6,
        "Tl", "Thallium", "#204.3833", 13, 6,
        "Pb", "Lead", "207.2", 14, 6,
        "Bi", "Bismuth", "#208.9804", 15, 6,
        "Po", "Polonium", "(209)", 16, 6,
        "At", "Astatine", "(210)", 17, 6,
        "Rn", "Radon", "(222)", 18, 6,
        "Fr", "Francium", "(223)", 1, 7,
        "Ra", "Radium", "(226)", 2, 7,
        "Ra", "Radium", "(226)", 3, 7,
        "Rf", "Rutherfordium", "(267)", 4, 7,
        "Db", "Dubnium", "(268)", 5, 7,
        "Sg", "Seaborgium", "(271)", 6, 7,
        "Bh", "Bohrium", "(272)", 7, 7,
        "Hs", "Hassium", "(270)", 8, 7,
        "Mt", "Meitnerium", "(276)", 9, 7,
        "Ds", "Darmstadium", "(281)", 10, 7,
        "Rg", "Roentgenium", "(280)", 11, 7,
        "Cn", "Copernicium", "(285)", 12, 7,
        "Uut", "Unutrium", "(284)", 13, 7,
        "Fl", "Flerovium", "(289)", 14, 7,
        "Uup", "Ununpentium", "(288)", 15, 7,
        "Lv", "Livermorium", "(293)", 16, 7,
        "Uus", "Ununseptium", "(294)", 17, 7,
        "Uuo", "Ununoctium", "(294)", 18, 7,
        "La", "Lanthanum", "138.90547", 4, 9,
        "Ce", "Cerium", "#140.116", 5, 9,
        "Pr", "Praseodymium", "140.90765", 6, 9,
        "Nd", "Neodymium", "#144.242", 7, 9,
        "Pm", "Promethium", "(145)", 8, 9,
        "Sm", "Samarium", "#150.36", 9, 9,
        "Eu", "Europium", "#151.964", 10, 9,
        "Gd", "Gadolinium", "#157.25", 11, 9,
        "Tb", "Terbium", "158.92535", 12, 9,
        "Dy", "Dysprosium", "162.5", 13, 9,
        "Ho", "Holmium", "164.93032", 14, 9,
        "Er", "Erbium", "#167.259", 15, 9,
        "Tm", "Thulium", "168.93421", 16, 9,
        "Ac", "Actinium", "(227)", 4, 10,
        "Th", "Thorium", "232.03806", 5, 10,
        "Pa", "Protactinium", "#231.0588", 6, 10,
        "U", "Uranium", "238.02891", 7, 10,
        "Np", "Neptunium", "(237)", 8, 10,
        "Pu", "Plutonium", "(244)", 9, 10,
        "Am", "Americium", "(243)", 10, 10,
        "Cm", "Curium", "(247)", 11, 10,
        "Bk", "Berkelium", "(247)", 12, 10,
        "Cf", "Californium", "(251)", 13, 10,
        "Es", "Einstenium", "(252)", 14, 10,
        "Fm", "Fermium", "(257)", 15, 10,
        "Md", "Mendelevium", "(258)", 16, 10,

    ];

    var camera, scene, renderer;
    var controls;
    var nowNode;

    var objects = [];
    var targets = { table: [], sphere: [], helix: [], grid: [] };

    var Init = function () {
        init();
        animate();
    }

    //注册屏幕点击事件
    $(window).on("click", function () {
        if (nowNode) {
            var e = $(".element")[nowNode.index]
            var obj = objects[nowNode.index]
            returnTransform(e,obj)
        }
        nowNode = null;
    })

    //保存数据
    function saveTransform(index){
        nowNode = {};
        nowNode.index = index;
        var obj = objects[index];
        nowNode.rotation={};
        nowNode.rotation.x = obj.rotation.x;
        nowNode.rotation.y = obj.rotation.y;
        nowNode.rotation.z = obj.rotation.z;
        nowNode.position={};
        nowNode.position.x = obj.position.x;
        nowNode.position.y = obj.position.y;
        nowNode.position.z = obj.position.z;
        console.log("camera", camera)
        console.log("卡片", obj)
        console.log("nowNode", nowNode)
    }

    function showBigCard(_this) {
        if (nowNode) {  //如果已经有点开的卡片 则先恢复
            var node = $(".element")[nowNode.index]
            var o = objects[nowNode.index]
            returnTransform(node,o)
        }
        var index = $(_this).index();
        saveTransform(index);
        var obj = objects[index];
        //向camera看齐
        new TWEEN.Tween(obj.rotation)
        .to({ x: camera.rotation.x, y: camera.rotation.y, z: camera.rotation.z }, 1000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
        var z = camera.position.z >= 0 ? 1500: -1500;
        new TWEEN.Tween(obj.position)
        .to({x:0,y:0, z: z }, 1000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
        new TWEEN.Tween(_this)
        .to({}, 1000)
        .onUpdate(render)
        .start();
        _this.classList.add("btnClick");

        setTimeout(() => {
            if (nowNode) {  //如果已经有点开的卡片 则先恢复
                var node = $(".element")[nowNode.index]
                var o = objects[nowNode.index]
                returnTransform(node,o)
            }
        }, 30000);

    }
    //卡片点击事件
    function btnClick(e) {

        showBigCard(this)
        e.stopPropagation()
    }

    //恢复初始位置
    function returnTransform(element,obj) {
        console.log("nowNode",nowNode)
        console.log("obj",obj)
        element.style.transition = "all 2s";
        element.classList.remove("btnClick");
        new TWEEN.Tween(obj.rotation)
        .to({ x: nowNode.rotation.x, y: nowNode.rotation.y, z: nowNode.rotation.z }, 1000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
        new TWEEN.Tween(obj.position)
        .to({x: nowNode.position.x, y: nowNode.position.y, z: nowNode.position.z }, 1000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
        new TWEEN.Tween(this)
        .to({}, 1000 * 2)
        .onUpdate(render)
        .start();
    }

    function init() {

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 3000;

        scene = new THREE.Scene();

        // table
        var imgNum = 85;
        var j = 1;
        var isGif = true;
        var gifCount = 0;
        var gifNum = 37;
        var gifIndexArr;
        console.log("卡片张数",table.length/5);
        
        //
        function randomGifIndex(){
            var arr = [];
            while (1000) {
                var randomIndex = Math.floor((Math.random()*(table.length/5)));
                if (arr.indexOf(randomIndex)==-1) {
                    arr.push(randomIndex)
                }
                if (arr.length >= gifNum) {
                    return arr;
                }
            }
        }
        gifIndexArr = randomGifIndex();
        for (var i = 0; i < table.length; i += 5) {

            var element = document.createElement('img');
            element.className = 'element';
            //随机GIF
            j = j > imgNum ? 1 : j;
            var url;
            if (gifIndexArr.indexOf(i/5) != -1) {
                gifCount++
                url = './img/img (' + gifCount + ').gif';
                gifIndexArr.splice(gifIndexArr.indexOf(i/5),1);
            }else{
                url = './img/img (' + j + ').jpg';
                j++;
            }
            element.setAttribute('src', url);

            //先排GIF
            // j = j > imgNum ? 1 : j;
            // var url = './img/img (' + j + ').jpg';
            // if (isGif) {
            //     gifCount++;
            //     url = './img/img (' + j + ').gif';
            //     if (gifCount == gifNum) {
            //         isGif = false;
            //         j = 1;
            //     }
            // }
            // element.setAttribute('src', url);
            // j++;



            //
            element.addEventListener("click", btnClick);

            
            // var element = document.createElement( 'div' );
            // element.className = 'element';
            // element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

            // var number = document.createElement( 'div' );
            // number.className = 'number';
            // number.textContent = (i/5) + 1;
            // element.appendChild( number );

            // var symbol = document.createElement( 'div' );
            // symbol.className = 'symbol';
            // symbol.textContent = table[ i ];
            // element.appendChild( symbol );

            // var details = document.createElement( 'div' );
            // details.className = 'details';
            // details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
            // element.appendChild( details );

            var object = new THREE.CSS3DObject(element);
            object.position.x = Math.random() * 4000 - 2000;
            object.position.y = Math.random() * 4000 - 2000;
            object.position.z = Math.random() * 4000 - 2000;
            scene.add(object);
            objects.push(object);
            //
            var object = new THREE.Object3D();
            object.position.x = (table[i + 3] * 140) - 1330;
            object.position.y = - (table[i + 4] * 180) + 990;

            targets.table.push(object);

        }

        // sphere

        var vector = new THREE.Vector3();

        for (var i = 0, l = objects.length; i < l; i++) {

            var phi = Math.acos(-1 + (2 * i) / l);
            var theta = Math.sqrt(l * Math.PI) * phi;

            var object = new THREE.Object3D();

            object.position.x = 800 * Math.cos(theta) * Math.sin(phi);
            object.position.y = 800 * Math.sin(theta) * Math.sin(phi);
            object.position.z = 800 * Math.cos(phi);

            vector.copy(object.position).multiplyScalar(2);

            object.lookAt(vector);

            targets.sphere.push(object);

        }

        // helix

        var vector = new THREE.Vector3();

        for (var i = 0, l = objects.length; i < l; i++) {

            var phi = i * 0.175 + Math.PI;

            var object = new THREE.Object3D();

            object.position.x = 900 * Math.sin(phi);
            object.position.y = - (i * 8) + 450;
            object.position.z = 900 * Math.cos(phi);

            // vector.x = object.position.x * 2;
            // vector.y = object.position.y;
            // vector.z = object.position.z * 2;

            object.lookAt(vector);

            targets.helix.push(object);

        }

        // grid

        for (var i = 0; i < objects.length; i++) {

            var object = new THREE.Object3D();

            object.position.x = ((i % 5) * 400) - 800;
            object.position.y = (- (Math.floor(i / 5) % 5) * 400) + 800;
            object.position.z = (Math.floor(i / 25)) * 1000 - 2000;

            targets.grid.push(object);

        }

        //

        renderer = new THREE.CSS3DRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.position = 'absolute';
        document.getElementById('container').appendChild(renderer.domElement);

        //

        controls = new THREE.TrackballControls(camera, renderer.domElement);
        controls.rotateSpeed = 0.5; //按住鼠标左键后拖动查看时的旋转速度  
        controls.minDistance = 500; //设置滚轮能滚到的最近距离  
        controls.maxDistance = 6000; //设置滚轮能滚到的最远距离  
        controls.noPan = true; //如设置为true, 则禁用 按下鼠标右键平移的功能  
        controls.addEventListener('change', render);


        // 自动更换
        var ini = 0;
        setInterval(function () {
        	ini = Math.floor(Math.random() * 3 + 1);
        	switch (ini) {
        		case 1:
        			transform(targets.sphere, 1000);
        			break;
        		case 2:
        			transform(targets.helix, 1000);
        			break;
        		case 3:
        			transform(targets.grid, 1000);
        			break;
        		case 4:
        			transform(targets.table, 1000);
        			break;
        	}
        	console.log(ini)
        }, 1000*60*2);

        //自动随机展示图片
        var ini = 0;
        setInterval(function () {
            // console.log("点击",$('.element')[0])
            var len = $('.element').length;
            ini = Math.floor(Math.random() * len);
            showBigCard($('.element')[ini])
        	console.log(ini)
        }, 1000*60);


        var button = document.getElementById('table');
        button.addEventListener('click', function (event) {

            transform(targets.table, 2000);

        }, false);

        var button = document.getElementById('sphere');
        button.addEventListener('click', function (event) {

            transform(targets.sphere, 2000);

        }, false);

        var button = document.getElementById('helix');
        button.addEventListener('click', function (event) {

            transform(targets.helix, 2000);

        }, false);

        var button = document.getElementById('grid');
        button.addEventListener('click', function (event) {

            transform(targets.grid, 2000);

        }, false);

        transform(targets.table, 5000);

        //

        window.addEventListener('resize', onWindowResize, false);

    }

    function transform(targets, duration) {

        TWEEN.removeAll();

        for (var i = 0; i < objects.length; i++) {

            var object = objects[i];
            var target = targets[i];

            new TWEEN.Tween(object.position)
                .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

            new TWEEN.Tween(object.rotation)
                .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();

        }

        new TWEEN.Tween(this)
            .to({}, duration * 2)
            .onUpdate(render)
            .start();

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        render();

    }

    function animate() {

        requestAnimationFrame(animate);

        TWEEN.update();

        controls.update();
    }

    function render() {

        renderer.render(scene, camera);

    }

    return {
        Init: Init
    }
}(window));
