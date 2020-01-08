/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

const Bio = ({ greeting }) => {
  return (
    <div className="signature">
      —&nbsp;
      <a href="https://github.com/dutzi">
        <svg
          width="68px"
          height="41px"
          viewBox="0 0 68 41"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>signature</title>
          <desc>Created with Sketch.</desc>
          <g
            id="signature"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <path
              d="M9.38802481,27.9938041 C10.0379375,28.0320119 10.7110614,27.8935087 11.4073964,27.5782944 C12.1037315,27.2630801 12.809351,26.8380185 13.524255,26.3031094 C14.239159,25.7682003 14.9494207,25.1473237 15.6550402,24.4404796 C16.3606597,23.7336355 17.0430681,22.9933595 17.7022653,22.2196518 C18.3614624,21.445944 18.988164,20.6722362 19.5823699,19.8985285 C20.1765758,19.1248207 20.7243594,18.4132006 21.2257206,17.7636682 C21.3742721,17.5153175 21.4346211,17.2860708 21.4067677,17.0759279 C21.3789143,16.8657851 21.2953541,16.7129539 21.1560871,16.6174345 C21.0168201,16.521915 20.8450574,16.4980351 20.6407992,16.5457948 C20.4365409,16.5935546 20.2508515,16.7416098 20.0837311,16.9899604 C17.83689,20.161207 15.8360873,22.4918823 14.081323,23.9819861 C12.3265587,25.47209 10.7899794,26.2744536 9.47158501,26.3890769 C8.89594804,26.4272847 8.53385382,26.2649016 8.38530234,25.9019276 C8.23675086,25.5389536 8.2135397,25.0613562 8.31566884,24.4691354 C8.41779798,23.8769147 8.61741402,23.2226063 8.91451698,22.5062102 C9.21161993,21.7898141 9.52264958,21.1020739 9.84760594,20.4429895 C10.1725623,19.7839051 10.4835919,19.2012363 10.7806949,18.6949831 C11.0777979,18.1887298 11.2820561,17.8400838 11.3934697,17.6490448 C12.6561573,16.9039929 14.0116895,16.0299897 15.4600664,15.0270352 C16.9084433,14.0240807 18.3057556,12.9208307 19.6520034,11.7172853 C20.9982512,10.5137399 22.2191586,9.2337789 23.3147257,7.87740233 C24.4102929,6.52102576 25.2366105,5.1264414 25.7936785,3.69364925 C25.9793679,3.23515576 26.0397169,2.83874993 25.9747256,2.50443176 C25.9097343,2.17011359 25.7797518,1.89310711 25.584778,1.67341231 C25.3898042,1.45371751 25.1530503,1.28655843 24.8745162,1.17193506 C24.5959822,1.05731169 24.3174482,1 24.0389142,1 C23.7232423,1 23.3565058,1.04298376 22.9387048,1.12895129 C22.5209038,1.21491882 22.0706071,1.36297401 21.5878148,1.57311686 C21.1050225,1.78325971 20.6036613,2.06026619 20.0837311,2.40413631 C19.563801,2.74800643 19.0531553,3.16829212 18.551794,3.6649934 C17.8276056,4.35273364 17.0848482,5.14554529 16.3235219,6.04342837 C15.5621956,6.94131146 14.8101537,7.9012822 14.0673963,8.9233406 C13.3246389,9.945399 12.6004505,11.0104412 11.894831,12.1184671 C11.1892115,13.226493 10.5392988,14.334519 9.94509284,15.4425449 C10.0936443,15.1368826 10.0286531,14.8216683 9.75011903,14.4969021 C9.69441223,14.4395904 9.51336512,14.3488469 9.2069777,14.2246716 C8.90059027,14.1004962 8.44100914,14.0670644 7.8282343,14.1243761 C6.58411569,14.2772073 5.46997961,14.6592852 4.48582608,15.2706098 C3.50167255,15.8819345 2.67535496,16.5935546 2.00687331,17.4054701 C1.33839167,18.2173857 0.832388202,19.0579571 0.488862912,19.9271843 C0.145337623,20.7964116 -0.017140555,21.5748953 0.00142837958,22.2626355 C0.0199973142,22.8166485 0.136053155,23.26559 0.349595903,23.6094602 C0.56313865,23.9533303 0.818461501,24.2255608 1.11556445,24.4261517 C1.41266741,24.6267426 1.71905483,24.7652458 2.03472672,24.8416614 C2.3503986,24.918077 2.61964815,24.9562848 2.84247537,24.9562848 C3.19528513,24.9562848 3.55737935,24.8846452 3.92875804,24.741366 C4.30013673,24.5980867 4.66687319,24.4118238 5.02896742,24.182577 C5.39106164,23.9533303 5.7438714,23.6858757 6.08739669,23.3802134 C6.43092198,23.0745511 6.74195163,22.7593368 7.02048565,22.4345706 C6.81622737,23.2178303 6.70017153,23.9437783 6.67231813,24.6124147 C6.64446472,25.281051 6.71874046,25.8589438 6.89514534,26.3460932 C7.07155022,26.8332425 7.36401094,27.2200964 7.7725275,27.5066548 C8.18104406,27.7932132 8.71954316,27.9555964 9.38802481,27.9938041 Z M13,14 C13.1664465,13.7272941 13.4623514,13.2409686 13.8877147,12.5410234 C14.3130779,11.8410783 14.826288,11.041141 15.4273448,10.1412115 C16.0284016,9.24128203 16.7034346,8.30953687 17.4524439,7.34597602 C18.2014531,6.38241517 18.9782034,5.50066609 19.7826948,4.70072878 C20.5871863,3.90079147 21.3963012,3.24629731 22.2100396,2.7372463 C23.0237781,2.22819528 23.8005284,1.98275997 24.5402906,2.00094037 C24.6882431,2.00094037 24.8084544,2.09638743 24.9009247,2.28728156 C24.993395,2.47817569 25.0211361,2.67361492 24.984148,2.87359925 C24.8546896,3.41901105 24.5125495,4.05532482 23.9577279,4.78254055 C23.4029062,5.50975629 22.7324967,6.26424261 21.9464993,7.04599953 C21.160502,7.82775645 20.3097754,8.60951336 19.3943197,9.39127028 C18.4788639,10.1730272 17.5957728,10.8866076 16.7450462,11.5320116 C15.8943197,12.1774156 15.1314399,12.7228274 14.4564069,13.168247 C13.7813738,13.6136666 13.2959049,13.8909176 13,14 Z M3.2834891,22.9811024 C3.08245067,23.0104987 2.88141225,23.0055993 2.68037383,22.9664042 C2.47933541,22.9272091 2.30571132,22.8194226 2.15950156,22.6430446 C2.0132918,22.4666667 1.96760125,22.1727034 2.02242991,21.7611549 C2.13208723,20.9968504 2.39709242,20.2619423 2.81744548,19.5564304 C3.23779855,18.8509186 3.73582555,18.2188976 4.31152648,17.6603675 C4.88722741,17.1018373 5.49491173,16.6461942 6.13457944,16.2934383 C6.77424714,15.9406824 7.35908619,15.7153106 7.88909657,15.6173228 C8.14496366,15.5585302 8.37341641,15.5193351 8.57445483,15.4997375 C8.77549325,15.48014 8.97653167,15.4703412 9.17757009,15.4703412 C9.37860852,15.4703412 9.54766355,15.4262467 9.6847352,15.3380577 C9.82180685,15.2498688 9.92689512,15.1371829 10,15 C9.59792316,15.7643045 9.22326064,16.5188101 8.87601246,17.2635171 C8.52876428,18.008224 8.22720665,18.7431321 7.97133956,19.4682415 C7.62409138,19.87979 7.24942887,20.2815398 6.84735202,20.6734908 C6.44527518,21.0654418 6.04319834,21.4230971 5.6411215,21.7464567 C5.23904465,22.0698163 4.86895119,22.3343832 4.53084112,22.5401575 C4.19273105,22.7459318 3.9231568,22.8684164 3.72211838,22.9076115 C3.63073728,22.9272091 3.48452752,22.951706 3.2834891,22.9811024 Z M25.2363621,26.9987255 C25.8815312,27.0169928 26.540932,26.838887 27.2145644,26.4644082 C27.8881969,26.0899293 28.5618293,25.6058469 29.2354618,25.012161 C29.9090942,24.418475 30.568495,23.7425864 31.2136641,22.9844951 C31.8588333,22.2264038 32.4660512,21.4683125 33.0353181,20.7102212 C33.604585,19.9521299 34.1311568,19.2305731 34.6150336,18.5455508 C35.0989105,17.8605286 35.511629,17.2896767 35.8531891,16.8329952 C35.986018,16.6685898 36.028713,16.5087513 35.9812741,16.3534796 C35.9338352,16.1982079 35.8484452,16.0749039 35.725104,15.9835676 C35.6017629,15.8922313 35.4452145,15.8465631 35.2554589,15.8465631 C35.0657032,15.8465631 34.8949232,15.9104985 34.7431187,16.0383694 C34.1928274,16.714258 33.5713777,17.5225843 32.8787697,18.4633482 C32.1861617,19.4041121 31.4603464,20.3311755 30.701324,21.2445385 C29.9423015,22.1579016 29.1690473,22.9844951 28.3815615,23.7243191 C27.5940757,24.4641432 26.8303093,24.9801933 26.0902624,25.2724694 C25.8056289,25.3638057 25.5921539,25.3683726 25.4498372,25.2861699 C25.3075204,25.2039672 25.2221304,25.0715296 25.1936671,24.888857 C25.1652037,24.7061844 25.1746915,24.5006777 25.2221304,24.2723369 C25.2695693,24.0439962 25.3312399,23.8293559 25.4071421,23.628416 C25.4450933,23.5005452 25.5779222,23.2448036 25.8056289,22.8611911 C26.0333357,22.4775786 26.3132252,22.0300307 26.6452976,21.5185475 C26.9773699,21.0070642 27.3284178,20.4727468 27.6984413,19.9155954 C28.0684647,19.3584439 28.4147687,18.8423938 28.7373533,18.3674451 C29.0599378,17.8924963 29.3398274,17.4860497 29.5770219,17.1481054 C29.8142164,16.8101611 29.961277,16.6046544 30.0182037,16.5315854 C30.4166905,16.0018348 30.6254217,15.5268861 30.6443973,15.1067391 C30.6633728,14.6865921 30.568495,14.3806155 30.3597638,14.1888093 C30.1510327,13.997003 29.8616553,13.9513349 29.4916319,14.0518048 C29.1216084,14.1522747 28.7563289,14.4765186 28.3957932,15.0245364 C28.2250131,15.2802781 28.0257697,15.6090887 27.798063,16.0109685 C27.7601118,16.0292357 27.7411363,16.0383694 27.7411363,16.0383694 C27.190845,16.714258 26.6026026,17.4586489 25.976409,18.2715419 C25.3502155,19.084435 24.7050463,19.874494 24.0409017,20.641719 C23.376757,21.4089439 22.684149,22.098533 21.9630776,22.7104862 C21.2420063,23.3224394 20.5114471,23.7745541 19.7714002,24.0668303 C19.4867668,24.1581666 19.2780356,24.1627334 19.1452067,24.0805307 C19.0123777,23.998328 18.9317316,23.8658904 18.9032682,23.6832178 C18.8748049,23.5005452 18.8842927,23.2950385 18.9317316,23.0666978 C18.9791705,22.838357 19.0408411,22.6237167 19.1167433,22.4227768 C19.1546944,22.294906 19.2638039,22.0802657 19.4440718,21.7788559 C19.6243396,21.4774461 19.8378147,21.134935 20.084497,20.7513225 C20.3311793,20.3677101 20.5920933,19.9703971 20.8672389,19.5593838 C21.1423846,19.1483704 21.4032985,18.764758 21.6499809,18.4085464 C21.8966632,18.0523348 22.1101382,17.750925 22.2904061,17.504317 C22.4706739,17.257709 22.5892712,17.0978705 22.6461979,17.0248014 C23.0446847,16.4950509 23.2534158,16.0155353 23.2723914,15.5862547 C23.291367,15.1569741 23.1964892,14.8464306 22.987758,14.6546244 C22.7790268,14.4628182 22.4849056,14.4217168 22.1053943,14.5313204 C21.7258831,14.640924 21.3558596,14.9697346 20.995324,15.5177524 C20.8055683,15.8100286 20.5826055,16.170807 20.3264354,16.6000876 C20.0702653,17.0293682 19.7998635,17.4997502 19.5152301,18.0112335 C19.2305967,18.5227168 18.9459633,19.0524673 18.6613298,19.6004851 C18.3766964,20.1485029 18.1205263,20.6873871 17.8928196,21.2171377 C17.6651128,21.7468882 17.4706133,22.2401042 17.309321,22.6967857 C17.1480287,23.1534672 17.048407,23.5462133 17.0104559,23.875024 C16.9535292,24.4413091 17.1290532,24.8979906 17.5370278,25.2450686 C17.9450024,25.5921465 18.4146475,25.7748191 18.9459633,25.7930864 C19.3634256,25.8113536 19.7903758,25.7474182 20.2268137,25.6012801 C20.6632516,25.455142 21.0949457,25.2542022 21.5218958,24.9984605 C21.948846,24.7427189 22.3710522,24.4413091 22.7885146,24.0942312 C23.2059769,23.7471532 23.6139515,23.3726744 24.0124383,22.9707946 C23.594976,23.8841577 23.3577814,24.5874472 23.3008548,25.0806632 C23.2439281,25.6469483 23.419452,26.1036298 23.8274266,26.4507077 C24.2354012,26.7977857 24.7050463,26.9804583 25.2363621,26.9987255 Z M35.9693554,27 L36.0841477,26.997816 C37.058089,26.9788876 38.0741721,26.6287121 39.1323969,25.9472897 C40.1906216,25.2658672 41.2301167,24.4188212 42.2508822,23.4061517 C43.2716477,22.3934822 44.2502714,21.3050991 45.1867535,20.1410024 C46.1232356,18.9769057 46.9567047,17.9027189 47.6871607,16.918442 C47.8557275,16.6723728 47.9212812,16.445232 47.8838219,16.2370196 C47.8463626,16.0288072 47.7573969,15.87738 47.6169245,15.7827379 C47.4764522,15.6880959 47.303203,15.6644354 47.097177,15.7117564 C46.8911509,15.7590774 46.7038545,15.9057726 46.5352877,16.1518418 C45.6362649,17.4200447 44.7138301,18.5604809 43.7679832,19.5731504 C42.8221363,20.5858199 41.9418431,21.4565264 41.1271037,22.1852698 C40.3123643,22.9140133 39.6100027,23.5007937 39.020019,23.9456112 C38.4300353,24.3904286 38.0226656,24.6790867 37.7979099,24.8115856 C37.5731542,24.9630128 37.3109392,25.1097079 37.0112649,25.2516709 C36.7115907,25.3936339 36.430646,25.445687 36.1684311,25.4078302 C35.6065418,25.3131882 35.2413138,25.0245301 35.072747,24.5418558 C34.9041802,24.0591816 34.9041802,23.4771332 35.072747,22.7957108 C35.4098806,21.3192954 35.8687568,19.9280579 36.4493757,18.6219982 C37.0299946,17.3159385 37.6995793,16.0240751 38.4581298,14.746408 C39.2166802,13.4687408 40.0595141,12.1768774 40.9866314,10.8708177 C41.9137486,9.56475799 42.9111021,8.18298466 43.9786916,6.72549773 C45.8891151,6.68764093 47.804221,6.65451622 49.7240092,6.62612362 C51.6437975,6.59773102 53.4839848,6.58353472 55.2445711,6.58353472 C55.4131379,6.54567791 55.562975,6.4368396 55.6940825,6.25701979 C55.82519,6.07719997 55.9141558,5.88318385 55.9609799,5.67497144 C56.007804,5.46675902 56.0124864,5.2680108 55.9750271,5.07872678 C55.9375679,4.88944276 55.8345548,4.76640815 55.6659881,4.70962295 C53.9615907,4.78533656 52.2244164,4.85631806 50.4544653,4.92256747 C48.6845141,4.98881687 46.9192454,5.04086998 45.1586591,5.07872678 C45.5894408,4.47301793 46.0295874,3.84838067 46.4790988,3.20481501 C46.9286102,2.56124936 47.3874864,1.88929109 47.8557275,1.18894023 C47.986835,0.905014206 48.0336591,0.673141286 47.9961998,0.493321469 C47.9587405,0.313501653 47.8744571,0.181002841 47.7433496,0.0958250336 C47.6122421,0.010647226 47.4436754,-0.0177453766 47.2376493,0.010647226 C47.0316232,0.0390398285 46.8255972,0.138413937 46.6195711,0.308769553 C46.0202226,1.06590562 45.4068268,1.84670219 44.7793838,2.65115926 C44.1519408,3.45561634 43.5198154,4.28373391 42.8830076,5.13551199 L42.8830076,5.13551199 L39.7926167,5.13551199 C39.5865907,5.13551199 39.4086591,5.21595769 39.2588219,5.37684911 C39.1089848,5.53774052 39.0059718,5.71756034 38.9497828,5.91630856 C38.8935939,6.11505678 38.8982763,6.29960869 38.9638301,6.46996431 C39.0293838,6.64031992 39.1651737,6.73496193 39.3711998,6.75389033 L39.3711998,6.75389033 L41.6468512,6.75389033 C40.6354506,8.11673526 39.6615092,9.49850858 38.7250271,10.8992103 C37.7885451,12.299912 36.9363464,13.6911496 36.1684311,15.0729229 C35.4005157,16.4546962 34.7449783,17.812809 34.2018187,19.1472613 C33.6586591,20.4817137 33.2840662,21.7546487 33.0780402,22.9660664 C32.984392,23.4771332 32.9750271,23.9787359 33.0499457,24.4708743 C33.1248643,24.9630128 33.2793838,25.398366 33.5135043,25.776934 C33.7476249,26.1555021 34.080076,26.4583565 34.5108578,26.6854973 C34.9416395,26.9126381 35.4660695,27.0167444 36.0841477,26.997816 L35.9693554,27 Z M34.5953503,40.9625916 C35.1399151,41.0484923 35.7179181,40.9864529 36.3293593,40.7764735 C36.8834779,40.585583 37.580903,40.2085744 38.4216346,39.6454477 C39.2623663,39.0823209 40.1604205,38.3998876 41.1157974,37.5981478 C42.0711743,36.796408 43.0456587,35.8992229 44.0392506,34.9065927 C45.0328426,33.9139625 45.9691119,32.8879264 46.8480586,31.8284845 C47.7270053,30.7690426 48.5008606,29.6952839 49.1696244,28.6072085 C49.8383882,27.519133 50.3351842,26.4787802 50.6600123,25.4861499 C51.5771741,24.9516567 52.4800053,24.3933022 53.3685058,23.8110864 C54.2570063,23.2288706 55.1311761,22.6037044 55.9910153,21.9355879 C56.8508545,21.2674714 57.6868092,20.5373155 58.4988796,19.7451202 C59.3109499,18.9529249 60.089582,18.0796012 60.834776,17.1251491 C60.9685288,16.9533477 61.0210745,16.7624572 60.9924132,16.5524778 C60.9637519,16.3424983 60.8825448,16.1802414 60.7487921,16.0657072 C60.6150393,15.9511729 60.4430715,15.9082226 60.2328886,15.9368561 C60.0227057,15.9654897 59.802969,16.1229743 59.5736785,16.4093099 C58.4845489,17.8218991 57.2091208,19.0865482 55.7473942,20.2032573 C54.2856676,21.3199663 52.7140726,22.393725 51.0326093,23.4245333 C50.9943942,23.1191086 50.9561792,22.8900401 50.9179641,22.7373277 C51.3383299,22.2791907 51.7252575,21.754242 52.078747,21.1624817 C52.4322364,20.5707213 52.7284033,19.959872 52.9672475,19.3299335 C53.2060917,18.6999951 53.3971671,18.0796012 53.5404736,17.4687518 C53.6837801,16.8579025 53.7649872,16.2947757 53.7840947,15.7793715 C53.8223098,14.9203646 53.7267721,14.3763268 53.4974816,14.1472583 C53.2681912,13.9181898 52.9529168,13.9563679 52.5516585,14.2617926 C52.1121852,14.3381488 51.5771741,14.4669998 50.9466254,14.6483457 C50.3160767,14.8296916 49.6998586,14.9871762 49.0979712,15.1207995 C48.4960837,15.2544228 47.9562958,15.3212345 47.4786074,15.3212345 C47.0009189,15.3212345 46.6951983,15.1685221 46.5614456,14.8630974 C46.4659079,14.672207 46.336932,14.5958508 46.1745179,14.6340289 C46.0121039,14.672207 45.8687973,14.7724245 45.7445983,14.9346814 C45.6203993,15.0969382 45.5439692,15.3021454 45.5153079,15.550303 C45.4866466,15.7984606 45.5582999,16.0370736 45.7302677,16.2661421 C46.0168807,16.647923 46.4324697,16.8817638 46.9770345,16.9676645 C47.5215993,17.0535651 48.0948254,17.0583374 48.6967129,16.9819812 C49.2986003,16.9056251 49.8861571,16.776774 50.4593832,16.5954281 C51.0326093,16.4140822 51.4816364,16.2470531 51.8064646,16.0943407 C51.7682495,17.0297038 51.5962817,17.9984728 51.2905611,19.0006475 C50.9848405,20.0028223 50.5740284,20.8475125 50.0581249,21.534718 C49.5040063,21.1529372 48.7397048,20.9525022 47.7652204,20.9334132 C47.2302094,20.9143241 46.790736,21.0622642 46.4468003,21.3772334 C46.1028647,21.6922026 45.9022355,22.0501222 45.8449129,22.4509921 C45.7875903,22.851862 45.8926818,23.2336429 46.1601873,23.5963347 C46.4276928,23.9590265 46.9053812,24.169006 47.5932526,24.2262731 C48.2620164,24.2835402 48.9021189,24.1499169 49.5135601,23.8254032 L49.5135601,23.8254032 L49.5135601,24.0687885 C49.5135601,24.1546892 49.5040063,24.2453621 49.4848988,24.3408074 C48.070941,25.1807252 46.6426526,26.0206431 45.2000335,26.860561 C43.7574145,27.7004789 42.3625642,28.597664 41.0154828,29.5521161 C39.6684014,30.5065683 38.3977502,31.5421489 37.2035291,32.6588579 C36.009308,33.7755669 34.9536166,35.021127 34.0364548,36.3955381 C33.4250136,37.3118121 33.0858548,38.0944629 33.0189784,38.7434904 C32.9521021,39.3925178 33.0619704,39.9031497 33.3485835,40.2753861 C33.6351965,40.6476224 34.0507855,40.8766909 34.5953503,40.9625916 Z M48.3478261,22.9207607 C48.1304348,22.9947174 47.9009662,23.0169044 47.6594203,22.9873217 C47.3937198,22.9873217 47.2125604,22.9281564 47.115942,22.8098257 C47.0193237,22.691495 46.9830918,22.5657686 47.0072464,22.4326466 C47.031401,22.2995246 47.1038647,22.1885895 47.2246377,22.0998415 C47.3454106,22.0110935 47.4903382,21.9815108 47.6594203,22.0110935 C48.1908213,22.0998415 48.6376812,22.2921289 49,22.5879556 C48.7826087,22.735869 48.5652174,22.846804 48.3478261,22.9207607 Z M35.9463847,38.9381089 C35.8170738,38.9931232 35.6739083,39.0114613 35.516888,38.9931232 C35.3598677,38.9747851 35.2305569,38.9106017 35.1289556,38.8005731 C35.0273542,38.6905444 34.98579,38.530086 35.004263,38.3191977 C35.022736,38.1083095 35.1428103,37.8194842 35.364486,37.4527221 C36.1957698,36.1690544 37.1009455,35.0229226 38.0800131,34.0143266 C39.0590807,33.0057307 40.088949,32.0934097 41.169618,31.2773639 C42.2502869,30.4613181 43.3679018,29.7094556 44.5224627,29.0217765 C45.6770236,28.3340974 46.8362027,27.6601719 48,27 C47.5197027,27.7885387 46.9239493,28.6183381 46.2127398,29.4893983 C45.5015303,30.3604585 44.7441384,31.2223496 43.940564,32.0750716 C43.1369897,32.9277937 42.3195606,33.7530086 41.4882768,34.5507163 C40.6569929,35.3484241 39.8718916,36.0544413 39.1329726,36.6687679 C38.3940537,37.2830946 37.7428813,37.7965616 37.1794556,38.2091691 C36.61603,38.6217765 36.2050063,38.8647564 35.9463847,38.9381089 Z M62.6359031,13 C62.8062343,13 62.9893404,12.9463087 63.1852213,12.8389262 C63.3811021,12.7315436 63.5727247,12.5883669 63.7600891,12.409396 C63.9474534,12.2304251 64.1220429,12.0201342 64.2838575,11.7785235 C64.4456721,11.5369128 64.5861954,11.2818792 64.7054272,11.0134228 C64.9438909,10.4407159 65.0375731,9.96196868 64.9864737,9.57718121 C64.9353743,9.19239374 64.7394935,9 64.3988311,9 C64.0581687,9 63.6791817,9.19239374 63.2618703,9.57718121 C62.8445589,9.96196868 62.5166713,10.4407159 62.2782076,11.0134228 C62.0397439,11.5503356 61.9545783,12.01566 62.0227108,12.409396 C62.0908433,12.803132 62.2952407,13 62.6359031,13 Z M56.952449,26.9983326 C57.6032653,27.017786 58.2588671,26.867022 58.9192543,26.5460408 C59.5796414,26.2250595 60.2352432,25.7970845 60.8860595,25.2621157 C61.5368758,24.727147 62.1733359,24.1192279 62.7954398,23.4383586 C63.4175436,22.7574892 64.0252912,22.0571665 64.6186826,21.3373903 C65.212074,20.6176142 65.7767528,19.9124281 66.3127192,19.221832 C66.8486856,18.531236 67.3559395,17.9233169 67.834481,17.3980749 C67.9684726,17.2229942 68.0211121,17.0527768 67.9923996,16.8874229 C67.9636872,16.7220689 67.8823351,16.5907584 67.7483435,16.4934913 C67.6143519,16.3962243 67.4516478,16.3475907 67.2602313,16.3475907 C67.0688147,16.3475907 66.8869689,16.4156777 66.714694,16.5518515 C65.9873111,17.2716277 65.2551427,18.0643542 64.5181889,18.9300309 C63.7812351,19.7957076 63.0394959,20.6419309 62.2929713,21.4687009 C61.5464467,22.2954708 60.799922,23.0395637 60.0533974,23.7009796 C59.3068728,24.3623955 58.5603482,24.8487308 57.8138236,25.1599853 C57.5266987,25.2572524 57.3304967,25.2669791 57.2252176,25.1891655 C57.1199385,25.1113518 57.0672989,24.9800413 57.0672989,24.7952339 C57.0672989,24.6104265 57.1055823,24.396439 57.1821489,24.1532714 C57.2587155,23.9101038 57.3352821,23.6815262 57.4118488,23.4675387 C57.4501321,23.3313648 57.5601966,23.1027873 57.7420424,22.781806 C57.9238881,22.4608247 58.1344463,22.0960733 58.373717,21.6875517 C58.6129877,21.2790301 58.8666147,20.8559184 59.1345979,20.4182167 C59.4025811,19.980515 59.6609935,19.5719934 59.909835,19.1926519 C60.1586765,18.8133104 60.3692348,18.4874658 60.5415097,18.2151181 C60.7137846,17.9427703 60.8286345,17.7774164 60.8860595,17.7190561 C61.2880343,17.1549072 61.4938071,16.6442552 61.5033779,16.1871001 C61.5129488,15.729945 61.4124551,15.399237 61.2018968,15.1949762 C60.9913386,14.9907154 60.6994283,14.9469452 60.326166,15.0636657 C59.9529037,15.1803862 59.5844268,15.5305475 59.2207354,16.1141498 C58.9527522,16.5810317 58.5794898,17.1694973 58.1009484,17.8795468 C57.622407,18.5895962 57.1534364,19.3531425 56.6940366,20.1701858 C56.2346369,20.987229 55.8374475,21.8139989 55.5024685,22.6504955 C55.1674895,23.4869921 55,24.2554018 55,24.9557245 C55,25.5782337 55.196202,26.0694323 55.588606,26.4293203 C55.9810099,26.7892084 56.4356243,26.9788792 56.952449,26.9983326 Z"
              id="dutzi"
              fill="currentColor"
              fill-rule="nonzero"
            ></path>
          </g>
        </svg>
      </a>
    </div>
  )
}

export default Bio
