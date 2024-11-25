export default class HorarioFunc {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = 'aberto';
  }

  dadosFuncionamento() {
    this.diasSemanaAberto = this.funcionamento.dataset.semana
      .split(',')
      .map(Number);
    this.horarioAberto = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    this.isDiaSemanaAberto =
      this.diasSemanaAberto.indexOf(this.diaAgora) !== -1;
    this.isHorarioAberto =
      this.horaAgora >= this.horarioAberto[0] &&
      this.horaAgora < this.horarioAberto[1];

    return this.isDiaSemanaAberto && this.isHorarioAberto;
  }

  addClassAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    this.dadosFuncionamento();
    this.dadosAgora();
    this.addClassAberto();

    return this;
  }
}
