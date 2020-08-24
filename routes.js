//var rota = require('./files/RotaVeiculo.json');
var points = [{ lat: -8.368400000, lng: -35.031000000},
        { lat: -8.370300000, lng: -35.031400000},
        { lat: -8.366200000, lng: -35.028600000},
        { lat: -8.328500000, lng: -35.009400000},
        { lat: -8.291700000, lng: -35.026700000},
        { lat: -8.265700000, lng: -35.018500000},
        { lat: -8.241000000, lng: -35.004000000},
        { lat: -8.198800000, lng: -34.977900000},
        { lat: -8.177900000, lng: -34.950100000},
        { lat: -8.168100000, lng: -34.937700000},
        { lat: -8.150100000, lng: -34.943100000},
        { lat: -8.139100000, lng: -34.947000000},
        { lat: -8.119600000, lng: -34.942800000},
        { lat: -8.117700000, lng: -34.943500000},
        { lat: -8.108700000, lng: -34.947100000},
        { lat: -8.078500000, lng: -34.942900000},
        { lat: -8.064600000, lng: -34.941400000},
        { lat: -8.067600000, lng: -34.944500000},
        { lat: -8.068600000, lng: -34.947000000},
        { lat: -8.072100000, lng: -34.957700000},
        { lat: -8.079200000, lng: -34.987600000},
        { lat: -8.090400000, lng: -35.025400000},
        { lat: -8.095400000, lng: -35.072000000},
        { lat: -8.113600000, lng: -35.115200000},
        { lat: -8.107500000, lng: -35.158200000},
        { lat: -8.110600000, lng: -35.200200000},
        { lat: -8.115000000, lng: -35.250900000},
        { lat: -8.135900000, lng: -35.293600000},
        { lat: -8.134700000, lng: -35.339300000},
        { lat: -8.140700000, lng: -35.380600000},
        { lat: -8.154500000, lng: -35.419400000},
        { lat: -8.167400000, lng: -35.454400000},
        { lat: -8.172800000, lng: -35.480600000},
        { lat: -8.188800000, lng: -35.504900000},
        { lat: -8.190000000, lng: -35.507700000},
        { lat: -8.193200000, lng: -35.550300000},
        { lat: -8.201000000, lng: -35.591600000},
        { lat: -8.215100000, lng: -35.637600000},
        { lat: -8.221800000, lng: -35.682600000},
        { lat: -8.236400000, lng: -35.731700000},
        { lat: -8.255200000, lng: -35.774000000},
        { lat: -8.281500000, lng: -35.812200000},
        { lat: -8.299600000, lng: -35.852500000},
        { lat: -8.293200000, lng: -35.883200000},
        { lat: -8.293200000, lng: -35.883300000},
        { lat: -8.293200000, lng: -35.883200000},
        { lat: -8.293200000, lng: -35.883300000},
        { lat: -8.293200000, lng: -35.883200000},
        { lat: -8.293200000, lng: -35.883300000},
        { lat: -8.293200000, lng: -35.883200000},
        { lat: -8.293200000, lng: -35.883300000},
        { lat: -8.293200000, lng: -35.883200000},
        { lat: -8.293200000, lng: -35.883300000},
        { lat: -8.293200000, lng: -35.883200000},
        { lat: -8.293200000, lng: -35.883300000},
        { lat: -8.296200000, lng: -35.893000000},
        { lat: -8.304700000, lng: -35.930600000},
        { lat: -8.308400000, lng: -35.953800000},
        { lat: -8.303900000, lng: -35.972800000},
        { lat: -8.304800000, lng: -36.011300000},
        { lat: -8.313500000, lng: -36.042200000},
        { lat: -8.320600000, lng: -36.078500000},
        { lat: -8.320500000, lng: -36.079000000},
        { lat: -8.320600000, lng: -36.079000000},
        { lat: -8.321200000, lng: -36.086700000},
        { lat: -8.329400000, lng: -36.122700000},
        { lat: -8.328700000, lng: -36.146900000},
        { lat: -8.359300000, lng: -36.172200000},
        { lat: -8.409000000, lng: -36.188200000},
        { lat: -8.457200000, lng: -36.214100000},
        { lat: -8.491200000, lng: -36.234700000},
        { lat: -8.491300000, lng: -36.235000000},
        { lat: -8.491400000, lng: -36.235000000},
        { lat: -8.491300000, lng: -36.235000000},
        { lat: -8.500400000, lng: -36.245200000},
        { lat: -8.543900000, lng: -36.269900000},
        { lat: -8.590000000, lng: -36.289900000},
        { lat: -8.634200000, lng: -36.306000000},
        { lat: -8.657600000, lng: -36.326900000},
        { lat: -8.665100000, lng: -36.360200000},
        { lat: -8.674200000, lng: -36.399400000},
        { lat: -8.707500000, lng: -36.418300000},
        { lat: -8.738500000, lng: -36.430900000},
        { lat: -8.773800000, lng: -36.427100000},
        { lat: -8.812700000, lng: -36.444700000},
        { lat: -8.843300000, lng: -36.458600000},
        { lat: -8.867100000, lng: -36.462000000},
        { lat: -8.878700000, lng: -36.483600000},
        { lat: -8.876800000, lng: -36.500900000},
        { lat: -8.874600000, lng: -36.528700000},
        { lat: -8.882600000, lng: -36.576200000},
        { lat: -8.895800000, lng: -36.627500000},
        { lat: -8.904100000, lng: -36.659600000},
        { lat: -8.911600000, lng: -36.688700000},
        { lat: -8.933700000, lng: -36.720600000},
        { lat: -8.942000000, lng: -36.720900000},
        { lat: -8.951900000, lng: -36.723600000},
        { lat: -8.964000000, lng: -36.758800000},
        { lat: -8.964100000, lng: -36.758900000},
        { lat: -8.967600000, lng: -36.807700000},
        { lat: -8.997700000, lng: -36.850800000},
        { lat: -9.009000000, lng: -36.868300000},
        { lat: -9.009100000, lng: -36.868400000},
        { lat: -9.009000000, lng: -36.868300000},
        { lat: -9.009100000, lng: -36.868400000},
        { lat: -9.012000000, lng: -36.871700000},
        { lat: -9.041900000, lng: -36.912200000},
        { lat: -9.072900000, lng: -36.955400000},
        { lat: -9.101900000, lng: -36.993500000},
        { lat: -9.126700000, lng: -37.020400000},
        { lat: -9.128300000, lng: -37.072000000},
        { lat: -9.129800000, lng: -37.115600000},
        { lat: -9.129800000, lng: -37.115500000},
        { lat: -9.129800000, lng: -37.115600000},
        { lat: -9.131500000, lng: -37.142200000},
        { lat: -9.132800000, lng: -37.192100000},
        { lat: -9.134600000, lng: -37.242900000},
        { lat: -9.136500000, lng: -37.293300000},
        { lat: -9.138200000, lng: -37.339200000},
        { lat: -9.153000000, lng: -37.390800000},
        { lat: -9.169300000, lng: -37.440500000},
        { lat: -9.184500000, lng: -37.487200000},
        { lat: -9.184600000, lng: -37.487300000},
        { lat: -9.197200000, lng: -37.526100000},
        { lat: -9.213100000, lng: -37.574700000},
        { lat: -9.229600000, lng: -37.625400000},
        { lat: -9.244300000, lng: -37.669800000},
        { lat: -9.260900000, lng: -37.720100000},
        { lat: -9.275200000, lng: -37.762800000},
        { lat: -9.275200000, lng: -37.762900000},
        { lat: -9.288100000, lng: -37.807200000},
        { lat: -9.288600000, lng: -37.809800000},
        { lat: -9.299400000, lng: -37.863000000},
        { lat: -9.310200000, lng: -37.916700000},
        { lat: -9.320900000, lng: -37.957800000},
        { lat: -9.325300000, lng: -37.969900000},
        { lat: -9.342500000, lng: -38.018300000},
        { lat: -9.359800000, lng: -38.068300000},
        { lat: -9.377900000, lng: -38.121300000},
        { lat: -9.396300000, lng: -38.169300000},
        { lat: -9.396500000, lng: -38.169600000},
        { lat: -9.406500000, lng: -38.189300000},
        { lat: -9.427000000, lng: -38.200500000},
        { lat: -9.427200000, lng: -38.200500000},
        { lat: -9.446700000, lng: -38.213200000},
        { lat: -9.440900000, lng: -38.207700000},
        { lat: -9.444500000, lng: -38.202500000},
        { lat: -9.468900000, lng: -38.205500000},
        { lat: -9.519200000, lng: -38.218900000},
        { lat: -9.559900000, lng: -38.222300000},
        { lat: -9.569200000, lng: -38.223200000},
        { lat: -9.597600000, lng: -38.225500000},
        { lat: -9.649700000, lng: -38.224000000},
        { lat: -9.692300000, lng: -38.227600000},
        { lat: -9.743500000, lng: -38.242500000},
        { lat: -9.743500000, lng: -38.242600000},
        { lat: -9.779600000, lng: -38.250200000},
        { lat: -9.829500000, lng: -38.260500000},
        { lat: -9.878300000, lng: -38.270000000},
        { lat: -9.923500000, lng: -38.280000000},
        { lat: -9.953100000, lng: -38.301000000},
        { lat: -9.990100000, lng: -38.313600000},
        { lat: -9.990000000, lng: -38.313500000},
        { lat: -9.995400000, lng: -38.314300000},
        { lat: -10.028300000, lng: -38.326800000},
        { lat: -10.052500000, lng: -38.339900000},
        { lat: -10.072100000, lng: -38.341900000},
        { lat: -10.078700000, lng: -38.340200000},
        { lat: -10.096100000, lng: -38.313100000},
        { lat: -10.138400000, lng: -38.295900000},
        { lat: -10.178100000, lng: -38.282800000},
        { lat: -10.180000000, lng: -38.283500000},
        { lat: -10.202200000, lng: -38.290900000},
        { lat: -10.227700000, lng: -38.298500000},
        { lat: -10.267600000, lng: -38.306000000},
        { lat: -10.305800000, lng: -38.311300000},
        { lat: -10.306900000, lng: -38.311300000},
        { lat: -10.338100000, lng: -38.320100000},
        { lat: -10.361400000, lng: -38.333700000},
        { lat: -10.371500000, lng: -38.338300000},
        { lat: -10.397900000, lng: -38.351700000},
        { lat: -10.455200000, lng: -38.382600000},
        { lat: -10.488600000, lng: -38.384000000},
        { lat: -10.532300000, lng: -38.383600000},
        { lat: -10.566200000, lng: -38.374100000},
        { lat: -10.595000000, lng: -38.373300000},
        { lat: -10.595100000, lng: -38.373500000},
        { lat: -10.622600000, lng: -38.394200000},
        { lat: -10.624300000, lng: -38.395100000},
        { lat: -10.667800000, lng: -38.418800000},
        { lat: -10.696600000, lng: -38.449500000},
        { lat: -10.728900000, lng: -38.485200000},
        { lat: -10.753300000, lng: -38.507200000},
        { lat: -10.758500000, lng: -38.509100000},
        { lat: -10.799700000, lng: -38.524200000},
        { lat: -10.824700000, lng: -38.545200000},
        { lat: -10.841000000, lng: -38.571400000},
        { lat: -10.860900000, lng: -38.605900000},
        { lat: -10.884400000, lng: -38.648900000},
        { lat: -10.914500000, lng: -38.687300000},
        { lat: -10.944200000, lng: -38.723600000},
        { lat: -10.956300000, lng: -38.742600000},
        { lat: -10.970700000, lng: -38.764200000},
        { lat: -10.987700000, lng: -38.799100000},
        { lat: -10.988900000, lng: -38.803100000},
        { lat: -10.989100000, lng: -38.803500000},
        { lat: -10.989100000, lng: -38.803400000},
        { lat: -10.989100000, lng: -38.803500000},
        { lat: -10.989100000, lng: -38.803400000},
        { lat: -10.989100000, lng: -38.803500000},
        { lat: -10.989100000, lng: -38.803400000},
        { lat: -10.989100000, lng: -38.803500000},
        { lat: -10.989100000, lng: -38.803400000},
        { lat: -10.989100000, lng: -38.803500000},
        { lat: -10.989200000, lng: -38.803500000},
        { lat: -10.989100000, lng: -38.803500000},
        { lat: -10.989100000, lng: -38.803400000},
        { lat: -10.989100000, lng: -38.803500000},
        { lat: -10.992900000, lng: -38.804300000},
        { lat: -11.025600000, lng: -38.824400000},
        { lat: -11.047600000, lng: -38.838000000},
        { lat: -11.075000000, lng: -38.836300000},
        { lat: -11.111700000, lng: -38.830100000},
        { lat: -11.151200000, lng: -38.848500000},
        { lat: -11.198500000, lng: -38.871300000},
        { lat: -11.198500000, lng: -38.871500000},
        { lat: -11.223700000, lng: -38.889300000},
        { lat: -11.241900000, lng: -38.902200000},
        { lat: -11.242100000, lng: -38.902400000},
        { lat: -11.281000000, lng: -38.926500000},
        { lat: -11.328000000, lng: -38.952400000},
        { lat: -11.345600000, lng: -38.960500000},
        { lat: -11.358200000, lng: -38.962300000},
        { lat: -11.398100000, lng: -38.967900000},
        { lat: -11.426600000, lng: -38.974100000},
        { lat: -11.443700000, lng: -38.981000000},
        { lat: -11.467800000, lng: -38.990500000},
        { lat: -11.481400000, lng: -38.996000000},
        { lat: -11.511700000, lng: -38.994900000},
        { lat: -11.555600000, lng: -38.989800000},
        { lat: -11.595600000, lng: -38.985300000},
        { lat: -11.616900000, lng: -38.983000000},
        { lat: -11.621300000, lng: -38.982500000},
        { lat: -11.651900000, lng: -38.992400000},
        { lat: -11.676200000, lng: -38.995800000},
        { lat: -11.707900000, lng: -38.986700000},
        { lat: -11.754300000, lng: -38.986100000},
        { lat: -11.774600000, lng: -38.985800000},
        { lat: -11.803400000, lng: -38.981800000},
        { lat: -11.855400000, lng: -38.976700000},
        { lat: -11.903700000, lng: -38.982700000},
        { lat: -11.905800000, lng: -38.982900000},
        { lat: -11.948900000, lng: -38.977400000},
        { lat: -11.967000000, lng: -38.973800000},
        { lat: -11.982800000, lng: -38.972100000},
        { lat: -12.021900000, lng: -38.971000000},
        { lat: -12.064800000, lng: -38.969800000},
        { lat: -12.074200000, lng: -38.969600000},
        { lat: -12.090600000, lng: -38.969200000},
        { lat: -12.124700000, lng: -38.968200000},
        { lat: -12.169300000, lng: -38.965000000},
        { lat: -12.191000000, lng: -38.965300000},
        { lat: -12.220800000, lng: -38.965600000},
        { lat: -12.231700000, lng: -38.970400000},
        { lat: -12.246400000, lng: -38.986800000},
        { lat: -12.283400000, lng: -38.998900000},
        { lat: -12.298600000, lng: -39.035100000},
        { lat: -12.330800000, lng: -39.064800000},
        { lat: -12.361200000, lng: -39.103600000},
        { lat: -12.390000000, lng: -39.145000000},
        { lat: -12.405300000, lng: -39.174900000},
        { lat: -12.416800000, lng: -39.192900000},
        { lat: -12.439900000, lng: -39.229400000}];
var gastations = [{irn_referencia:5,lat:-12.692832,lng:-39.699084,posto:'POSTO IRAPURU',cidade:'ITATIM/BA',endereco:'KM 553 - ZONA RURAL',br:'BR 116',fone:'(75)34522266',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:49,lat:-12.905345,lng:-39.861575,posto:'POSTO ANDORINHA',cidade:'MILAGRES/BA',endereco:'BR-116',br:'BR 116',fone:'(75)35452213',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'0',pernoite:'0'},
{irn_referencia:163,lat:-13.493936,lng:-40.047178,posto:'POSTO GRANDE VALE',cidade:'JAGUAQUARA/BA',endereco:'RODOVIA BR 116- KM 647',br:'BR 116',fone:'(73)35259557',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:198,lat:-19.839817,lng:-43.197521,posto:'POSTO MARFIM',cidade:'JOAO MONLEVADE/MG',endereco:'BR 381- KM 348',br:'BR 381',fone:'(31)38525393',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:227,lat:-12.697116,lng:-39.706988,posto:'POSTO PARQUE DOS COQUEIROS',cidade:'ITATIM/BA',endereco:'KM 530- S/N - CENTRO',br:'BR 116',fone:'(75)34522132',band:'SHELL',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:237,lat:-18.832208,lng:-41.988857,posto:'POSTO PLANALTO II',cidade:'GOVERNADOR VALADARES/MG',endereco:'KM 412 - SANTA PAULA',br:'BR 116',fone:'(33)21022102',band:'IPIRANGA',estado:'',parada:'1',abastecimento:'1',pernoite:'1'},
{irn_referencia:247,lat:-12.688206,lng:-39.685877,posto:'POSTO REFORCO 4',cidade:'ITATIM/BA',endereco:'ROD. BR 116, KM 517, S/N ZONA RURAL, ITATIM - BA, 46875-000',br:'BR 116',fone:'(75)34522115',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'1',pernoite:'1'},
{irn_referencia:265,lat:-14.765520,lng:-40.707178,posto:'POSTO SAO JORGE',cidade:'VITORIA DA CONQUISTA/BA',endereco:'N 3231',br:'BR 116',fone:'(77)21017162',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:268,lat:-14.951474,lng:-40.898959,posto:'POSTO SAO MARCOS',cidade:'VITORIA DA CONQUISTA/BA',endereco:'835 - ZONA RURAL',br:'BR 116',fone:'(77)34213228',band:'REDE HG',estado:'',parada:'1',abastecimento:'1',pernoite:'1'},
{irn_referencia:376,lat:-10.072859,lng:-38.341290,posto:'POSTO NOVO TEMPO',cidade:'JEREMOABO/BA',endereco:'BR 110',br:'BR 110',fone:'(75)32032424',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:378,lat:-12.684958,lng:-39.679023,posto:'POSTO PAPALEGUA III',cidade:'ITATIM/BA',endereco:'ROD. BR 116, KM 552',br:'BR 116',fone:'(0)40031232',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:503,lat:-21.483347,lng:-45.203359,posto:'POSTO NOVO RIO',cidade:'CARMO DA CACHOEIRA/MG',endereco:'RODOVIA FERNAO DIAS, KM 727,3',br:'BR 381',fone:'(35)32251212',band:'IPIRANGA',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:505,lat:-21.164482,lng:-45.123486,posto:'POSTO GRAAL PERDOES',cidade:'RIBEIRAO VERMELHO/MG',endereco:'KM 674, S/N - ZONA RURAL',br:'381',fone:'(35)38649261',band:'ALE',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:510,lat:-20.876141,lng:-44.844765,posto:'POSTO TARTARIA SANTO ANTONIO',cidade:'SANTO ANTONIO DO AMPARO/MG',endereco:'ROD. FERNAO DIAS, 381',br:'BR 381',fone:'(35)36480416',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:511,lat:-13.857669,lng:-40.114005,posto:'POSTO CURVELO',cidade:'JEQUIE/BA',endereco:'AV, TV. PRES. KENEDY, 2453',br:'BR 116',fone:'(73)35252453',band:'SHELL',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:513,lat:-13.855950,lng:-40.114111,posto:'POSTO SANTA RITA',cidade:'JEQUIE/BA',endereco:'BR 116',br:'BR 116',fone:'(73)35254992',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:515,lat:-20.731547,lng:-44.772585,posto:'POSTO JUA',cidade:'OLIVEIRA/MG',endereco:'ROD. FERNAO DIAS, 1334',br:'BR 381',fone:'(37)33314570',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:521,lat:-12.815279,lng:-39.823856,posto:'POSTO IRMAO CAMINHONEIRO',cidade:'ITATIM/BA',endereco:'BR 116',br:'BR 116',fone:'(75)35451300',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:525,lat:-12.461305,lng:-39.271756,posto:'POSTO SAO CAETANO 2',cidade:'SANTO ESTEVAO/BA',endereco:'BR 116',br:'BR 116',fone:'(75)32311047',band:'IPIRANGA',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:528,lat:-12.084340,lng:-38.968900,posto:'POSTO SAO CRISTOVAO',cidade:'FEIRA DE SANTANA/BA',endereco:'BR 116',br:'BR 116',fone:'(75)36249274',band:'SHELL',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:534,lat:-10.985372,lng:-38.803667,posto:'POSTO BRASIL 4',cidade:'TUCANO/BA',endereco:'BR 116',br:'BR 116',fone:'(75)32721866',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:570,lat:-9.089109,lng:-36.977274,posto:'POSTO PARAISO',cidade:'AGUAS BELAS/PE',endereco:'BR-423, AGUAS BELAS - PE, 55340-000',br:'BR 423',fone:'(87)981114471',band:'IPIRANGA',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:574,lat:-8.293553,lng:-35.883948,posto:'POSTO PICHILAU',cidade:'CARUARU/PE',endereco:'ENCRUZILHADA DE SAO JOAO',br:'BR 232',fone:'(81)986090419',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:738,lat:-20.058546,lng:-44.288239,posto:'POSTO TRANSABRIL',cidade:'SAO JOAQUIM DE BICAS/MG',endereco:'ROD. FERNAO DIAS BR-381, KM 451,5, S/N - CAMPINA VERDE, SAO JOAQUIM DE BICAS - MG, 32920-000',br:'BR-381',fone:'(31)35349894',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:766,lat:-17.58711,lng:-41.48824,posto:'AUTO POSTO SECULOS',cidade:'TEOFILO OTONI/MG',endereco:'BR-116 TOPAZIO, KM 243 - ZONA RURAL, TEOFILO OTONI - MG, 39800-600',br:'BR-116',fone:'(33)35281188',band:'SHELL',estado:'',parada:'1',abastecimento:'1',pernoite:'1'},
{irn_referencia:791,lat:-8.219819,lng:-34.99095,posto:'POSTO COTEGY /BASE SEEK WAY',cidade:'JABOATAO DOS GUARARAPES/PE',endereco:'ESTRADA VARIANTE, 1510, JABOATAO DOS GUARARAPES - PE',br:'BR-101',fone:'(81)35243279',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'1',pernoite:'1'},
{irn_referencia:920,lat:-17.622146,lng:-41.496219,posto:'POSTO SETE ESTRELAS',cidade:'TEOFILO OTONI/MG',endereco:'TEOFILO OTONI',br:'BR 116',fone:'(33)35281161',band:'IPIRANGA',estado:'',parada:'1',abastecimento:'0',pernoite:'0'},
{irn_referencia:921,lat:-18.721951,lng:-41.989720,posto:'POSTO CHEROKEE',cidade:'GOVERNADOR VALADARES/MG',endereco:'BR-116, 399 - ZONA RURAL',br:'BR 116',fone:'(33)32213331',band:'SHELL',estado:'',parada:'1',abastecimento:'1',pernoite:'1'},
{irn_referencia:1584,lat:-18.891244,lng:-41.947450,posto:'POSTO FERRARI REDE HG',cidade:'GOVERNADOR VALADARES/MG',endereco:'ROD. BR 116, KM 420, S/N - VILA RICA, GOV. VALADARES - MG, 35045-410',br:'BR 116',fone:'(33)32781026',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'0'},
{irn_referencia:1741,lat:-18.681182,lng:-41.988327,posto:'POSTO PINHEIROS - REDE HG',cidade:'GOVERNADOR VALADARES/MG',endereco:'BR 116, KM 394.5, S/N - XONIM DE BAIXO, GOV. VALADARES - MG, 35109-500',br:'BR 116',fone:'(33)32848012',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1805,lat:-19.841413,lng:-43.198547,posto:'POSTO CINCO ESTRELAS',cidade:'JOAO MONLEVADE/MG',endereco:'BR 381 KM - SANTO HIPOLITO, JOAO MONLEVADE - MG',br:'BR-381',fone:'(31)38525381',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1806,lat:-19.624507,lng:-42.836643,posto:'POSTO VERANEIO',cidade:'ANTONIO DIAS/MG',endereco:'RODOVIA KM 169, BR-381 - SA CARVALHO, ANTONIO DIAS - MG, 35177-000',br:'BR-381',fone:'(31)41161920',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1807,lat:-19.466234,lng:-42.535354,posto:'POSTO JR FAISAO IV',cidade:'IPATINGA/MG',endereco:'R. NOVO HAMBURGO, 480 - VENEZA, IPATINGA - MG, 35164-260',br:'BR-381',fone:'(31)38013100',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1808,lat:-18.507101,lng:-41.878817,posto:'POSTO TURMALINA',cidade:'FREI INOCENCIO/MG',endereco:'FREI INOCENCIO - MG, 35112-000',br:'BR-116',fone:'(0)0',band:'SHELL',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1809,lat:-18.289256,lng:-41.748492,posto:'POSTO BICHO GROSSO',cidade:'CAMPANARIO/MG',endereco:'BR-116, 340, CAMPANARIO - MG, 39835-000',br:'BR-116',fone:'(33)35131138',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1810,lat:-18.175390,lng:-41.706746,posto:'POSTO PERIQUITO - REDE HG',cidade:'ITAMBACURI/MG',endereco:'RODOVIA BR-116, KM 324, S/N - ZONA RURAL, ITAMBACURI - MG, 39830-000',br:'BR-116',fone:'(33)21022103',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1811,lat:-17.373486,lng:-41.531022,posto:'POSTO CAXIAS DO SUL',cidade:'CATUJI/MG',endereco:'CATUJI - MG, 39816-000',br:'BR-116',fone:'(0)0',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'0'},
{irn_referencia:1815,lat:-14.896512,lng:-40.867121,posto:'POSTO NOVO PARAISO',cidade:'VITORIA DA CONQUISTA/BA',endereco:'AIRTON SENNA, VITORIA DA CONQUISTA - BA, 45066-022',br:'BR-116',fone:'(0)0',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1817,lat:-14.821983,lng:-40.814076,posto:'POSTO MACAUBENSE ROBINSON NUNES VITORIA DA CONQUISTA',cidade:'VITORIA DA CONQUISTA/BA',endereco:'BR 116 KM 828 - CHACARAS AGROFLORES, VITORIA DA CONQUISTA - BA',br:'BR-116',fone:'(77)34270508',band:'PETROBRAS',estado:'',parada:'1',abastecimento:'1',pernoite:'1'},
{irn_referencia:1819,lat:-14.482718,lng:-40.337100,posto:'POSTO IPIRANGA ESTRADAO',cidade:'POCOES/BA',endereco:'ROD BR 116 1761 - KM 716, POCOES - BA, 45260-000',br:'BR-116',fone:'(77)34101058',band:'IPIRANGA',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1820,lat:-12.706594,lng:-39.724869,posto:'REDE HG - POSTO PAPA LEGUAS II',cidade:'ITATIM/BA',endereco:'ROD. KM 1355 ZONA RURAL, BR-116, ITATIM - BA, 46875-000',br:'BR-116',fone:'(75)34522548',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1821,lat:-11.966702,lng:-38.974176,posto:'POSTO CONTERRANEO II',cidade:'SANTA BARBARA/BA',endereco:'BR-116, 16, SANTA BARBARA - BA, 44150-000',br:'BR-116',fone:'(75)30214040',band:'',estado:'',parada:'1',abastecimento:'0',pernoite:'1'},
{irn_referencia:1850,lat:-21.675210,lng:-45.339448,posto:'POSTO TREVO',cidade:'TRES CORACOES/MG',endereco:'ROD. FERNAO DIAS',br:'BR 381',fone:'(35)32312306',band:'BR',estado:'',parada:'1',abastecimento:'1',pernoite:'1'},
{irn_referencia:2170,lat:-17.826246,lng:-41.506987,posto:'POSTO CIA DO CAMINHAO',cidade:'TEOFILO OTONI/MG',endereco:'ROD. SANTOS DUMONT, 14956-15016 - JARDIM DAS ACACIAS, TEOFILO OTONI - MG',br:'BR-116',fone:'(33)35226554',band:'',estado:'',parada:'1',abastecimento:'1',pernoite:'1'},
{irn_referencia:2265,lat:-9.4437,lng:-38.2035,posto:'POSTO BR NOVO TEMPO 3',cidade:'PAULO AFONSO/BA',endereco:'R. MARACANA, 74 - TANCREDO NEVES III, PAULO AFONSO - BA, 48611-258',br:'',fone:'(75)991239439',band:'',estado:'',parada:'1',abastecimento:'1',pernoite:'1'}];  


//assets
var startIcon = new H.map.Icon('assets/bandeira.png');
var endIcon = new H.map.Icon('assets/pin.png');
var gasStationIcon = new H.map.Icon('assets/combustivel.png');
// Instantiate a map and platform object:
var platform = new H.service.Platform({
  'apikey': 'XU6XEDp3PnkpuWfwfqeU5iP29tm8jIcqgJEAnPnsBfk'
});
// Retrieve the target element for the map:
var targetElement = document.getElementById('mapContainer');

// Get the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();
// var texto;
// // const reader = new FileReader();
// fetch('./files/RotaVeiculo.json', function(result) {
//   return result.json();
// }).then(function(resp){
//   const reader = new FileReader();
//   console.log(reader.readAsText(resp.blob(), 'UTF-8'));
// });
// console.log(texto);

window.addEventListener('resize', () => map.getViewPort().resize());
// Instantiate the map:
var map = new H.Map(
document.getElementById('mapContainer'),
defaultLayers.vector.normal.map,
{
  zoom: 4,
  center: { lat: -19.9102254, lng: -44.2711629 },
});
var ui = H.ui.UI.createDefault(map, defaultLayers, 'pt-BR');

var onError;

var service = platform.getSearchService();

var mapEvents = new H.mapevents.MapEvents(map);

map.addEventListener('pointerup', function(evt){
  console.log(evt.type, evt.currentPointer.type, evt.position);
});

var behavior = new H.mapevents.Behavior(mapEvents);

var routingParameters = {
  'transportMode':'car',
  'return':'polyline',
  'routingMode':'fast',
  'origin':'-23.089533,-46.949870',
  'destination':'-8.398104,-35.061195',
  'via':'-16.731706,-43.878892',
};

var circles = [{lat:-23.089533,lng:-46.949870},{lat:-8.398104,lng:-35.061195}];

function addMarkertToGroup(group, gastation, html){
  var marker = new H.map.Marker({lat:gastation.lat, lng:gastation.lng}, {icon : gasStationIcon});

  marker.setData(html);
  group.addObject(marker);
};

function addInfoBubble(map){
  var group = new H.map.Group();

  map.addObject(group);

  group.addEventListener('tap', function(evt){
    var bubble = new H.ui.InfoBubble(evt.target.getGeometry(),{
      content : evt.target.getData()
    });
    ui.addBubble(bubble);
  }, false);


  gastations.forEach(function(gastation){
    addMarkertToGroup(group, gastation,   `<div class="posto_card">
                                            <p class="posto_name">Posto: ${gastation.posto}</p>
                                            <p class="posto_endereco">Endereço: ${gastation.endereco}</p>
                                            <p class="posto_fone">Telefone: ${gastation.fone}</p>
                                          </div>`)
  });
}


// Define a callback function to process the routing response:
var onResult = function(result) {
  // ensure that at least one route was found
  if (result.routes.length) {
    result.routes[0].sections.forEach((section) => {
         // Create a linestring to use as a point source for the route line
        let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

        // Create a polyline to display the route:
        let routeLine = new H.map.Polyline(linestring, {
          style: { strokeColor: 'blue', lineWidth: 3 }
        });


        
        //rota alternativa
        var pontos = new H.geo.LineString();
          points.forEach(function(point) {
            pontos.pushPoint(point);
          });
        
          var rotaAlternativa = new H.map.Polyline(pontos, { style: { lineWidth: 3, strokeColor: 'rgba(255, 0, 0,1)' }});
        
        circles.forEach(function(circle){
          let x = new H.map.Circle(circle, 100000, 
                    { style :{  fillColor:'rgba(255,0,0,0.2)', 
                                strokeColor: 'rgba(0, 0, 0,1)'
                              }
                    });
          map.addObject(x);
        }); 
        map.addObject(new H.map.Circle({lat:-8.367838,lng:-35.03406}, 20000, 
          { style :{  fillColor:'rgba(0,255,0,0.2)', 
                      strokeColor: 'rgba(0, 0, 0,1)'
                    }
          })); 
        
        
        //var circle = new H.map.Circle({lat:-23.089533,lng:-46.949870}, 100000);
        //var circle1 = new H.map.Circle({lat:-8.398104,lng:-35.061195}, 100000);

        //map.addObjects(postos);
        // Create a marker for the start point:
        let startMarker = new H.map.Marker(section.departure.place.location,  { icon: startIcon});

        // Create a marker for the end point:
        let endMarker = new H.map.Marker(section.arrival.place.location, {icon : endIcon});

        var routeOutline = new H.map.Polyline(linestring, {
          style: {
            lineWidth: 5,
            strokeColor: 'rgba(0, 128, 255, 0.7)',
            lineTailCap: 'arrow-tail',
            lineHeadCap: 'arrow-head'
          }
        });

        var routeArrows = new H.map.Polyline(linestring, {
          style: {
            lineWidth: 5,
            fillColor: 'white',
            strokeColor: 'rgba(255, 255, 255, 1)',
            lineDash: [0, 2],
            lineTailCap: 'arrow-tail',
            lineHeadCap: 'arrow-head' }
          }
        );
     
        // Add the route polyline and the two markers to the map:
        map.addObjects([routeLine, startMarker, endMarker, routeArrows, routeOutline, rotaAlternativa]);
        addInfoBubble(map);
        // Set the map's viewport to make the whole route visible:
        map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
    });
  }
};



var router = platform.getRoutingService(null, 8);



console.log(routingParameters);
router.calculateRoute(routingParameters, onResult,
  function(error) {
    alert(error.Massage);
  });
