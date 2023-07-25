  const placasPorEstado = {"Paraná": ["AAA a BEZ"],
  "São Paulo": ["BFA a GKI", "QSN a QSZ", "SAV a SAV"],
  "Minas Gerais": ["GKI a HOK", "NXX a NYG", "OLO a OMH", "OOV a ORC", "OWH a OXK", "PUA a PZZ", "QMQ a QQZ", "QUA a QUZ"],
  "Maranhão": ["HOL a HQE", "NHA a NHT", "NMP a NNI", "NWS a NXQ", "OIR a OJQ", "OXQ a OXZ", "PSA a PTZ"],
  "Mato Grosso do Sul": ["HQF a HTW", "NRF a NSD", "OOG a OOU", "QAA a QAZ"],
  "Ceará": ["HTX a HZA"],
  "Sergipe": ["MVL a MXG", "OLH a OLN", "OYA a OYC", "QKA a QKM", "QWA a QWF"],
  "Rio Grande do Sul": ["IAQ a JDO"],
  "Distrito Federal": ["JDP a JKR", "OVM a OVV", "OZW a PBZ", "REC a REZ"],
  "Bahia": ["JKS a JSZ"],
  "Pará": ["JTA a JWE", "NSE a NTC", "OBT a OCA", "OSW a OTZ", "QDA a QEZ", "QVA a QVZ"],
  "Amazonas": ["JWF a JXY"],
  "Mato Grosso": ["JXA a KAU", "JXZ a KAU", "NIY a NJW", "NPC a NPQ", "NTX a NUG", "OAP a OBS", "QBA a QCZ", "RAK a RBJ"],
  "Goiás": ["KAV a KFC", "NFC a NGZ", "NJX a NLU", "NVO a NWR", "OGH a OHA", "OMI a OOF", "PQA a PRZ", "QTN a QTS", "RBK a RCN"],
  "Pernambuco": ["KFD a KME", "NXU a NXW", "OYL a OYZ", "PCA a PED", "PEE a PFQ", "PFR a PGK", "PGL a PGU", "PGV a PGZ", "QYA a QYZ"],
  "Rio de Janeiro": ["KMF a LVE", "RIO a RIO", "RIP a RKV"],
  "Piauí": ["LVF a LWQ", "NHU a NIX", "ODU a OEI", "OUA a OUE", "OVW a OVY", "PIA a PIZ", "QRN a QRZ"],
  "Santa Catarina": ["LWR a MMM", "OKD a OKH", "QHA a QJZ", "QTK a QTM", "RAA a RAJ", "RDS a REB"],
  "Paraíba": ["MMN a MOW", "NPR a NQK", "OET a OFH", "OXO a OXO", "QFA a QFZ", "QSA a QSM"],
  "Espírito Santo": ["MOX a MTZ", "OCV a ODT", "OVE a OVF", "OVH a OVL", "OYD a OYK", "PPA a PPZ", "QRB a QRM"],
  "Alagoas": ["MUA a MVK", "NLV a NMO", "OHB a OHK", "ORD a ORM", "OXN a OXN", "QLA a QLM", "QTT a QTT", "QWG a QWL"],
  "Tocantins": ["MVL a MXG", "OYL a OYZ", "QKA a QKM", "QVA a QVZ"],
  "Rio Grande do Norte": ["MXH a MZM", "NNJ a NOH", "OJR a OKC", "OVZ a OWG", "QGA a QGZ", "RGE a RGM", "RGN a RGN"],
  "Acre": ["MZN a NAG", "NXR a NXT", "OVG a OVG", "OXP a OXP", "QLU a QLZ"],
  "Roraima": ["NAH a NBA", "NUH a NUL"],
  "Rondônia": ["NBB a NEH", "OHL a OHW", "OXL a OXL", "QRA a QRA", "QTA a QTJ"],
  "Amapá": ["NEI a NFB", "QLN a QLT"]
};
  
  function consultarEstado() {
    const placaInput = document.getElementById("placa");
    const placa = placaInput.value.toUpperCase();
    let resultado = "Placa não encontrada.";
  
    for (const estado in placasPorEstado) {
      const sequencias = placasPorEstado[estado];
  
      for (const sequencia of sequencias) {
        const inicio = sequencia.split(" ")[0];
        const fim = sequencia.split(" ")[2];
  
        if (placa >= inicio && placa <= fim) {
          resultado = `Placa pertence ao estado de ${estado}.`;
          break;
        }
      }
    }
  
    document.getElementById("resultado").innerText = resultado;
  }
  