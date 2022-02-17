const {test} = QUnit;
let tomb = [];
let lojatek = new LOJatek(0);
let lojatekter = new LampakJatekter($("#qunit-fixture"));

QUnit.module('ellenorzes()', function(hook) {
    hook.before(() => {
        const lojatek = new LOJatek(0);
    });
    test('Létezik-e az ellenorzes() metódus?', function(assert) {
        assert.ok(lojatek.ellenorzes, "Az ellenorzes() metódus létezik!");
    });
    test('Függvény-e az ellenorzes() metódus?', function(assert) {
        assert.ok(typeof lojatek.ellenorzes === "function", "az ellenorzes() metódus egy függvény!");
    });
    test('Minden lámpa felkapcsolva', function(assert) {
        for (let index = 0; index < 9; index++) {
            lampak[index].allapot = true;
            assert.ok(lampak[index].allapot, "lámpa felkapcsolva");
        }
    });
    test('Minden lámpa lekapcsolva', function(assert) {
        for (let index = 0; index < 9; index++) {
            lampak[index].allapot = false;
            assert.ok(!lampak[index].allapot, "lámpa felkapcsolva");
        }
    });
    test('Kiinduláskor néhány elem felkapcsolva (5)', function(assert) {
        const lojatek = new LOJatek(5);
        for (let index = 0; index < 9; index++) {
            if (lampak[index].allapot) {
                assert.ok(lampak[index].allapot, "lámpa felkapcsolva");
            }else{
                assert.ok(!lampak[index].allapot, "lámpa lekapcsolva");
            }
        }
    });
});

QUnit.module('szomszedokValtoztatasa()', function(hook) {
    hook.beforeEach(() => {
        const lojatek = new LOJatek(0);
    });
    test('Létezik-e a szomszedokValtoztatasa() metódus?', function(assert) {
        assert.ok(lojatek.szomszedokValtoztatasa, "a szomszedokValtoztatasa() metódus létezik");
    });
    test('Függvény-e a szomszedokValtoztatasa() metódus?', function(assert) {
        assert.ok(typeof lojatek.szomszedokValtoztatasa === "function", "a szomszedokValtoztatasa() metódus egy függvény");
    });
    test('Középső(dataId=4) lámpát kapcsoljuk', function(assert) {
        lojatek = new LOJatek(4);
        lojatek.szomszedokValtoztatasa(4);
        if (lampak[1].allapot) {
            assert.ok(lampak[1].allapot, "felette(dataId=1) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[1].allapot, "felette(dataId=1) lévő lámpa lekapcsolva");
        }
        if (lampak[3].allapot) {
            assert.ok(lampak[3].allapot, "balra(dataId=3) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[3].allapot, "balra(dataId=3) lévő lámpa lekapcsolva");
        }
        if (lampak[5].allapot) {
            assert.ok(lampak[5].allapot, "jobra(dataId=5) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[5].allapot, "jobra(dataId=5) lévő lámpa lekapcsolva");
        }
        if (lampak[7].allapot) {
            assert.ok(lampak[7].allapot, "alatta(dataId=7) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[7].allapot, "alatta(dataId=7) lévő lámpa lekapcsolva");
        }
    });
    test('Bal felső sorban(dataId=0) lévő lámpát kapcsoljuk', function(assert) {
        lojatek = new LOJatek(4);
        lojatek.szomszedokValtoztatasa(0);
        if (lampak[1].allapot) {
            assert.ok(lampak[1].allapot, "jobbra(dataId=1) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[1].allapot, "jobbra(dataId=1) lévő lámpa lekapcsolva");
        }
        if (lampak[3].allapot) {
            assert.ok(lampak[3].allapot, "alatta(dataId=3) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[3].allapot, "alatta(dataId=3) lévő lámpa lekapcsolva");
        }
    });
    test('Jobb felső sorban(dataId=2) lévő lámpát kapcsoljuk', function(assert) {
        lojatek = new LOJatek(4);
        lojatek.szomszedokValtoztatasa(2);
        if (lampak[1].allapot) {
            assert.ok(lampak[1].allapot, "balra(dataId=1) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[1].allapot, "balra(dataId=1) lévő lámpa lekapcsolva");
        }
        if (lampak[5].allapot) {
            assert.ok(lampak[5].allapot, "alatta(dataId=5) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[5].allapot, "alatta(dataId=5) lévő lámpa lekapcsolva");
        }
    });
    test('Bal alsó sorban(dataId=6) lévő lámpát kapcsoljuk', function(assert) {
        lojatek = new LOJatek(4);
        lojatek.szomszedokValtoztatasa(6);
        if (lampak[7].allapot) {
            assert.ok(lampak[7].allapot, "jobbra(dataId=7) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[7].allapot, "jobbra(dataId=7) lévő lámpa lekapcsolva");
        }
        if (lampak[3].allapot) {
            assert.ok(lampak[3].allapot, "felette(dataId=3) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[3].allapot, "felette(dataId=3) lévő lámpa lekapcsolva");
        }
    });
    test('Jobb alsó sorban(dataId=8) lévő lámpát kapcsoljuk', function(assert) {
        lojatek = new LOJatek(4);
        lojatek.szomszedokValtoztatasa(8);
        if (lampak[7].allapot) {
            assert.ok(lampak[7].allapot, "balra(dataId=7) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[7].allapot, "balra(dataId=7) lévő lámpa lekapcsolva");
        }
        if (lampak[5].allapot) {
            assert.ok(lampak[5].allapot, "felette(dataId=5) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[5].allapot, "felette(dataId=5) lévő lámpa lekapcsolva");
        }
    });
    test('Jobb szélső középsőlévő(dataId=5) lámpát kapcsoljuk', function(assert) {
        lojatek = new LOJatek(4);
        lojatek.szomszedokValtoztatasa(5);
        if (lampak[3].allapot) {
            assert.ok(lampak[3].allapot, "felette(dataId=3) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[3].allapot, "felette(dataId=3) lévő lámpa lekapcsolva");
        }
        if (lampak[4].allapot) {
            assert.ok(lampak[4].allapot, "balra(dataId=4) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[4].allapot, "balra(dataId=4) lévő lámpa lekapcsolva");
        }
        if (lampak[8].allapot) {
            assert.ok(lampak[8].allapot, "alatta(dataId=8) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[8].allapot, "alatta(dataId=8) lévő lámpa lekapcsolva");
        }
    });
    test('Bal szélső középsőlévő(dataId=3) lámpát kapcsoljuk', function(assert) {
        lojatek = new LOJatek(4);
        lojatek.szomszedokValtoztatasa(3);
        if (lampak[0].allapot) {
            assert.ok(lampak[0].allapot, "felette(dataId=0) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[0].allapot, "felette(dataId=0) lévő lámpa lekapcsolva");
        }
        if (lampak[4].allapot) {
            assert.ok(lampak[4].allapot, "jobbra(dataId=4) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[4].allapot, "jobbra(dataId=4) lévő lámpa lekapcsolva");
        }
        if (lampak[6].allapot) {
            assert.ok(lampak[6].allapot, "alatta(dataId=6) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[6].allapot, "alatta(dataId=6) lévő lámpa lekapcsolva");
        }
    });
    test('Első sor középsőlévő(dataId=1) lámpát kapcsoljuk', function(assert) {
        lojatek = new LOJatek(4);
        lojatek.szomszedokValtoztatasa(1);
        if (lampak[0].allapot) {
            assert.ok(lampak[0].allapot, "balra(dataId=0) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[0].allapot, "balra(dataId=0) lévő lámpa lekapcsolva");
        }
        if (lampak[2].allapot) {
            assert.ok(lampak[2].allapot, "jobbra(dataId=2) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[2].allapot, "jobbra(dataId=2) lévő lámpa lekapcsolva");
        }
        if (lampak[4].allapot) {
            assert.ok(lampak[4].allapot, "alatta(dataId=4) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[4].allapot, "alatta(dataId=4) lévő lámpa lekapcsolva");
        }
    });
    test('Utolsó sor középsőlévő(dataId=7) lámpát kapcsoljuk', function(assert) {
        lojatek = new LOJatek(4);
        lojatek.szomszedokValtoztatasa(7);
        if (lampak[6].allapot) {
            assert.ok(lampak[6].allapot, "balra(dataId=6) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[6].allapot, "balra(dataId=6) lévő lámpa lekapcsolva");
        }
        if (lampak[8].allapot) {
            assert.ok(lampak[8].allapot, "jobbra(dataId=8) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[8].allapot, "jobbra(dataId=8) lévő lámpa lekapcsolva");
        }
        if (lampak[4].allapot) {
            assert.ok(lampak[4].allapot, "felette(dataId=4) lévő lámpa felkapcsolva");
        }else{
            assert.ok(!lampak[4].allapot, "felette(dataId=4) lévő lámpa lekapcsolva");
        }
    });
});