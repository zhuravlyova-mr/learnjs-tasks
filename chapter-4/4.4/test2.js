describe('Лестница', function() {
  before(function() {
    window.alert = sinon.stub(window, "alert");
  });
  
  beforeEach(function() {
    ladder.step = 0;
  });

  it('up() возвращает this', function() {
    assert.equal(ladder.up(), ladder);
  });

  it('down() возвращает this', function() {
    assert.equal(ladder.down(), ladder);
  });

  it('showStep() вызывает alert', function() {
    ladder.showStep();
    assert(alert.called);
  });

  it('up().up().up() увеличивает ступеньку на 3', function() {
    assert.equal(ladder.up().up().up().step, 3);
  });

  it('down().down() уменьшает ступеньку на 2', function() {
    assert.equal(ladder.down().down().step, -2);
  });

  it('down().up() не изменяет ступеньку', function() {
    assert.equal(ladder.down().up().step, 0);
  });

  it('showStep() возвращает this', function() {
    assert.equal(ladder.showStep(), ladder);
  });
 
  it('up().up().down().showStep().down().showStep()', function () {
    assert.equal(ladder.up().up().down().showStep().down().showStep().step, 0)
  });
  
  after(function() {
    ladder.step = 0;
    alert.restore();
  });
});