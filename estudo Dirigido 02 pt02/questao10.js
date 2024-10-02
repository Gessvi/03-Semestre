const idadesGrupo1 = [25, 18, 32];
const idadesGrupo2 = [22, 30, 28];
const idadesConcatenadas = [...idadesGrupo1, ...idadesGrupo2].sort((a, b) => a - b);
const classificacao = idadesConcatenadas.map(idade => {
  if (idade < 13) return 'Criança';
  else if (idade < 18) return 'Adolescente';
  else if (idade < 60) return 'Adulto';
  else return 'Idoso';
});
console.log(idadesConcatenadas, classificacao);
