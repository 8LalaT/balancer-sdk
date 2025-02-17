import dotenv from 'dotenv';
import { Network } from '@/lib/constants/network';
import { AddressZero } from '@ethersproject/constants';

dotenv.config();

export const TEST_BLOCK = {
  [Network.MAINNET]: 17473802,
  [Network.POLYGON]: 44145777,
  [Network.ARBITRUM]: 100899142,
};

export const PROVIDER_URLS = {
  [Network.MAINNET]: `https://mainnet.infura.io/v3/${process.env.INFURA}`,
  [Network.GOERLI]: `https://goerli.infura.io/v3/${process.env.INFURA}`,
  [Network.POLYGON]: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA}`,
  [Network.ARBITRUM]: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA}`,
  [Network.SEPOLIA]: `https://sepolia.infura.io/v3/${process.env.INFURA}`,
  [Network.GNOSIS]: `https://rpc.gnosis.gateway.fm`,
  [Network.ZKEVM]: `https://zkevm-rpc.com`,
};

export type TestAddress = {
  id?: string;
  address: string;
  decimals: number;
  symbol?: string;
  slot?: number;
};

export type TestAddresses = {
  [key: string]: TestAddress;
};

export const ADDRESSES = {
  [Network.MAINNET]: {
    APE: {
      address: '0x4d224452801ACEd8B2F0aebE155379bb5D594381',
      decimals: 18,
      slot: 0,
    },
    sAPE: {
      address: '0x7966C5BAe631294D7cFFcEA5430b78C2F76DB6Fa',
      decimals: 18,
      slot: 3,
    },
    ETH: {
      address: AddressZero,
      decimals: 18,
      symbol: 'ETH',
    },
    BAL: {
      address: '0xba100000625a3754423978a60c9317c58a424e3d',
      decimals: 18,
      symbol: 'BAL',
      slot: 1,
    },
    USDC: {
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      decimals: 6,
      symbol: 'USDC',
      slot: 9,
    },
    USDT: {
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      decimals: 6,
      symbol: 'USDT',
      slot: 2,
    },
    WBTC: {
      address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      decimals: 8,
      symbol: 'WBTC',
      slot: 0,
    },
    renBTC: {
      address: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
      decimals: 8,
      symbol: 'renBTC',
      slot: 102,
    },
    WETH: {
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      decimals: 18,
      symbol: 'WETH',
      slot: 3,
    },
    DAI: {
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      decimals: 18,
      symbol: 'DAI',
      slot: 2,
    },
    aDAI: {
      address: '0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d',
      decimals: 18,
      symbol: 'aDAI',
      slot: 0,
    },
    eDAI: {
      address: '0xe025e3ca2be02316033184551d4d3aa22024d9dc',
      decimals: 18,
      symbol: 'eDAI',
      slot: 0,
    },
    STETH: {
      address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      decimals: 18,
      symbol: 'STETH',
      slot: 0,
    },
    wSTETH: {
      address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      decimals: 18,
      symbol: 'wSTETH',
      slot: 0,
    },
    bbausd: {
      id: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
      address: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
      decimals: 18,
      symbol: 'bbausd',
      slot: 0,
    },
    bbausd2: {
      id: '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
      address: '0xa13a9247ea42d743238089903570127dda72fe44',
      decimals: 18,
      symbol: 'bbausd2',
      slot: 0,
    },
    bbausd3: {
      id: '0xfebb0bbf162e64fb9d0dfe186e517d84c395f016000000000000000000000502',
      address: '0xfebb0bbf162e64fb9d0dfe186e517d84c395f016',
      decimals: 18,
      symbol: 'bbausd3',
      slot: 0,
    },
    bbausdcOld: {
      address: '0x9210F1204b5a24742Eba12f710636D76240dF3d0',
      decimals: 18,
      symbol: 'bbausdcOld',
    },
    waDAI: {
      address: '0x02d60b84491589974263d922d9cc7a3152618ef6',
      decimals: 18,
      symbol: 'waDAI',
      slot: 52,
    },
    waUSDC: {
      address: '0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de',
      decimals: 6,
      symbol: 'waUSDC',
      slot: 52,
    },
    waUSDT: {
      address: '0xf8Fd466F12e236f4c96F7Cce6c79EAdB819abF58',
      decimals: 6,
      symbol: 'waUSDT',
      slot: 52,
    },
    WBTCWETH: {
      id: '0xa6f548df93de924d73be7d25dc02554c6bd66db500020000000000000000000e',
      address: '0xa6f548df93de924d73be7d25dc02554c6bd66db5',
      decimals: 18,
      symbol: 'B-50WBTC-50WETH',
      slot: 0,
    },
    auraBal: {
      address: '0x616e8bfa43f920657b3497dbf40d6b1a02d4608d',
      decimals: 18,
      symbol: 'auraBal',
      slot: 0,
    },
    BAL8020BPT: {
      address: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56',
      decimals: 18,
      symbol: 'BAL8020BPT',
      slot: 0,
    },
    bbausdc: {
      address: '0x82698aeCc9E28e9Bb27608Bd52cF57f704BD1B83'.toLowerCase(),
      decimals: 18,
      symbol: 'bbausdc',
      slot: 0,
    },
    bbausdt: {
      address: '0x2F4eb100552ef93840d5aDC30560E5513DFfFACb'.toLowerCase(),
      decimals: 18,
      symbol: 'bbausdt',
    },
    bbadai: {
      address: '0xae37D54Ae477268B9997d4161B96b8200755935c'.toLowerCase(),
      decimals: 18,
      symbol: 'bbadai',
      slot: 0,
    },
    bbausdc3: {
      address: '0xcbfa4532d8b2ade2c261d3dd5ef2a2284f792692'.toLowerCase(),
      decimals: 18,
      symbol: 'bbausdc',
      slot: 0,
    },
    bbausdt3: {
      address: '0xa1697f9af0875b63ddc472d6eebada8c1fab8568'.toLowerCase(),
      decimals: 18,
      symbol: 'bbausdt',
    },
    bbadai3: {
      address: '0x6667c6fa9f2b3fc1cc8d85320b62703d938e4385'.toLowerCase(),
      decimals: 18,
      symbol: 'bbadai',
      slot: 0,
    },
    wstETH_bbaUSD: {
      id: '0x25accb7943fd73dda5e23ba6329085a3c24bfb6a000200000000000000000387',
      address: '0x25accb7943fd73dda5e23ba6329085a3c24bfb6a',
      decimals: 18,
      symbol: 'wstETH_bbaUSD',
      slot: 0,
    },
    wstETH_bbeUSD: {
      id: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023000200000000000000000473',
      address: '0x4fd4687ec38220f805b6363c3c1e52d0df3b5023',
      decimals: 18,
      symbol: '50wstETH-50bb-euler-USD',
      slot: 0,
    },
    bbeUSD: {
      id: '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f',
      address: '0x50cf90b954958480b8df7958a9e965752f627124',
      decimals: 18,
      symbol: 'bb-e-USD',
      slot: 0,
    },
    bbeUSDT: {
      id: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f00000000000000000000046b',
      address: '0x3C640f0d3036Ad85Afa2D5A9E32bE651657B874F',
      decimals: 18,
      symbol: 'bb-e-USDT',
      slot: 0,
    },
    bbeUSDC: {
      id: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a439900000000000000000000046a',
      address: '0xD4e7C1F3DA1144c9E2CfD1b015eDA7652b4a4399',
      decimals: 18,
      symbol: 'bb-e-USDC',
      slot: 0,
    },
    bbeDAI: {
      id: '0xeb486af868aeb3b6e53066abc9623b1041b42bc000000000000000000000046c',
      address: '0xeB486AF868AeB3b6e53066abc9623b1041b42bc0',
      decimals: 18,
      symbol: 'bb-e-DAI',
    },
    temple_bbeusd: {
      id: '0xa718042e5622099e5f0ace4e7122058ab39e1bbe000200000000000000000475',
      address: '0xa718042e5622099e5f0ace4e7122058ab39e1bbe',
      decimals: 18,
      symbol: 'temple_bbeusd',
      slot: 0,
    },
    bbeusd: {
      id: '0x50cf90b954958480b8df7958a9e965752f62712400000000000000000000046f',
      address: '0x50cf90b954958480b8df7958a9e965752f627124',
      decimals: 18,
      symbol: 'bbeusd',
      slot: 0,
    },
    bbeusdt: {
      id: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f00000000000000000000046b',
      address: '0x3c640f0d3036ad85afa2d5a9e32be651657b874f',
      decimals: 18,
      symbol: 'bbeusdt',
      slot: 0,
    },
    bbeusdc: {
      id: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a439900000000000000000000046a',
      address: '0xd4e7c1f3da1144c9e2cfd1b015eda7652b4a4399',
      decimals: 18,
      symbol: 'bbeusdc',
      slot: 0,
    },
    bbedai: {
      id: '0xeb486af868aeb3b6e53066abc9623b1041b42bc000000000000000000000046c',
      address: '0xeb486af868aeb3b6e53066abc9623b1041b42bc0',
      decimals: 18,
      symbol: 'bbedai',
      slot: 0,
    },
    wstETH_rETH_sfrxETH: {
      id: '0x5aee1e99fe86960377de9f88689616916d5dcabe000000000000000000000467',
      address: '0x5aee1e99fe86960377de9f88689616916d5dcabe',
      decimals: 18,
      symbol: 'wstETH-rETH-sfrxETH-BPT',
      slot: 0,
    },
    rETH: {
      id: '',
      address: '0xac3e018457b222d93114458476f3e3416abbe38f',
      decimals: 18,
      symbol: 'rETH',
      slot: 0,
    },
    sfrxETH: {
      id: '',
      address: '0xae78736cd615f374d3085123a210448e74fc6393',
      decimals: 18,
      symbol: 'sfrxETH',
      slot: 0,
    },
    bbgusd: {
      id: '0x99c88ad7dc566616548adde8ed3effa730eb6c3400000000000000000000049a',
      address: '0x99c88ad7dc566616548adde8ed3effa730eb6c34',
      decimals: 18,
      symbol: 'bb-g-USD',
      slot: 0,
    },
    bbgusdc: {
      id: '0x4a82b580365cff9b146281ab72500957a849abdc000000000000000000000494',
      address: '0x4a82b580365cff9b146281ab72500957a849abdc',
      decimals: 18,
      symbol: 'bb-g-USDC',
      slot: 0,
    },
    bbgdai: {
      id: '0xe03af00fabe8401560c1ff7d242d622a5b601573000000000000000000000493',
      address: '0xe03af00fabe8401560c1ff7d242d622a5b601573',
      decimals: 18,
      symbol: 'bb-g-DAI',
      slot: 0,
    },
    STG_BBAUSD: {
      id: '0x639883476960a23b38579acfd7d71561a0f408cf000200000000000000000505',
      address: '0x639883476960a23b38579acfd7d71561a0f408cf',
      decimals: 18,
      symbol: 'stg-bbausd',
      slot: 0,
    },
    STG: {
      address: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6'.toLowerCase(),
      decimals: 18,
      symbol: 'STG',
      slot: 0,
    },
    wstEthBoostedApe: {
      id: '0x959216bb492b2efa72b15b7aacea5b5c984c3cca000200000000000000000472',
      address: '0x959216BB492B2efa72b15B7AAcEa5B5C984c3ccA',
      decimals: 18,
      symbol: '50wstETH-50stk-APE',
      slot: 0,
    },
    bbtape: {
      id: '0x126e7643235ec0ab9c103c507642dc3f4ca23c66000000000000000000000468',
      address: '0x126e7643235ec0ab9c103c507642dC3F4cA23C66',
      decimals: 18,
      symbol: 'bb-t-stkAPE',
      slot: 0,
    },
    swEth_bbaweth: {
      id: '0x02d928e68d8f10c0358566152677db51e1e2dc8c00000000000000000000051e',
      address: '0x02d928e68d8f10c0358566152677db51e1e2dc8c',
      decimals: 18,
      symbol: 'swETH-bbawETH-BPT',
      slot: 0,
    },
    bbaweth: {
      id: '0x60d604890feaa0b5460b28a424407c24fe89374a0000000000000000000004fc',
      address: '0x60d604890feaa0b5460b28a424407c24fe89374a',
      decimals: 18,
      symbol: 'bbaweth',
      slot: 0,
    },
    swETH: {
      address: '0xf951e335afb289353dc249e82926178eac7ded78',
      decimals: 18,
      symbol: 'swETH',
      slot: 98,
    },
    vETH: {
      address: '0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
      decimals: 18,
      symbol: 'vETH',
      slot: 0,
    },
    bveth: {
      id: '0x793f2d5cd52dfafe7a1a1b0b3988940ba2d6a63d0000000000000000000004f8',
      address: '0x793f2d5cd52dfafe7a1a1b0b3988940ba2d6a63d',
      decimals: 18,
      symbol: 'bveth',
      slot: 0,
    },
  },
  [Network.POLYGON]: {
    MATIC: {
      address: AddressZero,
      decimals: 18,
      symbol: 'MATIC',
    },
    LINK: {
      address: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
      decimals: 18,
      symbol: 'LINK',
    },
    BAL: {
      address: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
      decimals: 18,
      symbol: 'BAL',
    },
    USDC: {
      address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      decimals: 6,
      symbol: 'USDC',
    },
    WBTC: {
      address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      decimals: 8,
      symbol: 'WBTC',
    },
    WETH: {
      address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      decimals: 18,
      symbol: 'WETH',
    },
    DAI: {
      address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      decimals: 18,
      symbol: 'DAI',
    },
    STETH: {
      address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
      decimals: 18,
      symbol: 'STETH',
    },
    stUSD_PLUS: {
      address: '0x5a5c6aa6164750b530b8f7658b827163b3549a4d',
      decimals: 6,
      symbol: 'stUSD+',
    },
    bstUSD_PLUS: {
      address: '0x1aafc31091d93c3ff003cff5d2d8f7ba2e728425',
      decimals: 18,
      symbol: 'bstUSD+',
    },
    USD_PLUS: {
      address: '0x5d9d8509c522a47d9285b9e4e9ec686e6a580850',
      decimals: 6,
      symbol: 'USD_PLUS',
    },
    USDT: {
      address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      decimals: 6,
      symbol: 'USDT',
    },
    DHT: {
      address: '0x8C92e38eCA8210f4fcBf17F0951b198Dd7668292',
      decimals: 18,
      symbol: 'DHT',
    },
    dUSD: {
      address: '0xbAe28251B2a4E621aA7e20538c06DEe010Bc06DE',
      decimals: 18,
      symbol: 'dUSD',
    },
    bbausd: {
      address: 'N/A',
      decimals: 18,
      symbol: 'bbausd',
    },
    waDAI: {
      address: '',
      decimals: 18,
      symbol: 'waDAI',
      slot: 52,
    },
    waUSDC: {
      address: '',
      decimals: 6,
      symbol: 'waUSDC',
      slot: 52,
    },
    waUSDT: {
      address: '',
      decimals: 6,
      symbol: 'waUSDT',
      slot: 52,
    },
    bbamUSD: {
      address: '0x48e6B98ef6329f8f0A30eBB8c7C960330d648085',
      decimals: 18,
      symbol: 'bb-am-usd',
      slot: 0,
    },
    brz: {
      address: '0x491a4eb4f1fc3bff8e1d2fc856a6a46663ad556f',
      decimals: 4,
      symbol: 'BRZ',
    },
    XSGD: {
      address: '0xdc3326e71d45186f113a2f448984ca0e8d201995',
      decimals: 6,
      symbol: 'XSGD',
    },
    WMATIC: {
      address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      decimals: 18,
      symbol: 'WMATIC',
    },
    stMATIC: {
      address: '0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4',
      decimals: 18,
      symbol: 'stMATIC',
    },
  },
  [Network.ARBITRUM]: {
    WETH: {
      address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      decimals: 18,
      symbol: 'WETH',
    },
    BAL: {
      address: '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8',
      decimals: 18,
      symbol: 'BAL',
    },
    USDC: {
      address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
      decimals: 6,
      symbol: 'USDC',
    },
    DAI: {
      address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      decimals: 18,
      symbol: 'DAI',
    },
    USDT: {
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      decimals: 6,
      symbol: 'USDT',
      slot: 51,
    },
    STETH: {
      address: '',
      decimals: 18,
      symbol: 'STETH',
    },
    bbausd: {
      address: '',
      decimals: 18,
      symbol: 'bbausd',
    },
    waDAI: {
      address: '',
      decimals: 18,
      symbol: 'waDAI',
      slot: 52,
    },
    waUSDC: {
      address: '',
      decimals: 6,
      symbol: 'waUSDC',
      slot: 52,
    },
    waUSDT: {
      address: '',
      decimals: 6,
      symbol: 'waUSDT',
      slot: 52,
    },
    bbrfusd: {
      id: '0x077794c30afeccdf5ad2abc0588e8cee7197b71a000000000000000000000352',
      address: '0x077794c30afeccdf5ad2abc0588e8cee7197b71a',
      decimals: 18,
      symbol: 'bb-rf-usd',
      slot: 52,
    },
    bbrfusdc: {
      address: '0x5bae72b75caab1f260d21bc028c630140607d6e8',
      decimals: 18,
      symbol: 'bb-rf-usdc',
      slot: 52,
    },
    bbrfusdt: {
      address: '0x894c82800526e0391e709c0983a5aea3718b7f6d',
      decimals: 18,
      symbol: 'bb-rf-usdt',
      slot: 52,
    },
    bbrfdai: {
      address: '0xe1fb90d0d3b47e551d494d7ebe8f209753526b01',
      decimals: 18,
      symbol: 'bb-rf-dai',
      slot: 52,
    },
    bbUSD_PLUS: {
      id: '0x519cce718fcd11ac09194cff4517f12d263be067000000000000000000000382',
      address: '0x519cCe718FCD11AC09194CFf4517F12D263BE067',
      decimals: 18,
      symbol: 'bbUSD_PLUS',
      slot: 0,
    },
    bbDAI_PLUS: {
      address: '0x117a3d474976274b37b7b94af5dcade5c90c6e85',
      decimals: 18,
      symbol: 'bbDAI_PLUS',
      slot: 52,
    },
    bbUSDC_PLUS: {
      address: '0x284eb68520c8fa83361c1a3a5910aec7f873c18b',
      decimals: 18,
      symbol: 'bbUSDC_PLUS',
      slot: 52,
    },
  },
  [Network.GNOSIS]: {
    WETH: {
      address: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
      decimals: 18,
      symbol: 'WETH',
    },
    BAL: {
      address: '0x7eF541E2a22058048904fE5744f9c7E4C57AF717',
      decimals: 18,
      symbol: 'BAL',
    },
    USDC: {
      address: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
      decimals: 6,
      symbol: 'USDC',
    },
    WXDAI: {
      address: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
      decimals: 18,
      symbol: 'WXDAI',
      slot: 3,
    },
    USDT: {
      address: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
      decimals: 6,
      symbol: 'USDT',
    },
    WXDAI_MPS: {
      id: '0x4bcf6b48906fa0f68bea1fc255869a41241d4851000200000000000000000021',
      address: '0x4bcf6b48906fa0f68bea1fc255869a41241d4851',
      decimals: 18,
      symbol: 'WXDAI_MPS',
    },
    MPS: {
      address: '0xfa57aa7beed63d03aaf85ffd1753f5f6242588fb',
      decimals: 0,
      symbol: 'MPS',
    },
    wstETH: {
      address: '0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6',
      decimals: 18,
      symbol: 'wstETH',
    },
  },
  [Network.GOERLI]: {
    USDC_old: {
      address: '0xe0c9275e44ea80ef17579d33c55136b7da269aeb',
      decimals: 6,
      symbol: 'USDC_old',
      slot: 0,
    },
    USDC: {
      address: '0xdabd33683bafdd448968ab6d6f47c3535c64bf0c',
      decimals: 6,
      symbol: 'USDC',
      slot: 0,
    },
    USDT: {
      address: '0x14468fd5e1de5a5a4882fa5f4e2217c5a8ddcadb',
      decimals: 6,
      symbol: 'USDT',
      slot: 0,
    },
    DAI: {
      address: '0xb8096bc53c3ce4c11ebb0069da0341d75264b104',
      decimals: 18,
      symbol: 'DAI',
      slot: 0,
    },
    BAL: {
      address: '0xfa8449189744799ad2ace7e0ebac8bb7575eff47',
      decimals: 18,
      symbol: 'BAL',
      slot: 1,
    },
    bbausd: {
      id: '0x13acd41c585d7ebb4a9460f7c8f50be60dc080cd00000000000000000000005f',
      address: '0x13acd41c585d7ebb4a9460f7c8f50be60dc080cd',
      decimals: 18,
      symbol: 'bbausd',
      slot: 0,
    },
    waDAI: {
      address: '0x0b61329839d2ebea96e21f45d4b065dbf38a7af6',
      decimals: 18,
      symbol: 'waDAI',
      slot: 52,
    },
    waUSDC: {
      address: '0xb8b3c69687ac048f607d75d89145bc82232098ca',
      decimals: 6,
      symbol: 'waUSDC',
      slot: 52,
    },
    waUSDT: {
      address: '0x014c0b2b8c4ed33231f9b33aca21735c8f71bbfb',
      decimals: 6,
      symbol: 'waUSDT',
      slot: 52,
    },
    MAI: {
      address: '0x398106564948fEeb1fEdeA0709AE7D969D62a391',
      decimals: 18,
      symbol: 'MAI',
      slot: 0,
    },
    waMAI: {
      address: '0x6B53E04299124217ebb46c2830e00DFafd0d86d6',
      decimals: 18,
      symbol: 'waMAI',
      slot: 0,
    },
    WETH: {
      address: '0xdfcea9088c8a88a76ff74892c1457c17dfeef9c1',
      decimals: 18,
      symbol: 'WETH',
      slot: 4,
    },
    waWETH: {
      address: '0xAB1Ec6011332A431d3fFA597681C29E28FeFe065',
      decimals: 18,
      symbol: 'waWETH',
      slot: 0,
    },
    WBTC: {
      address: '0x37f03a12241E9FD3658ad6777d289c3fb8512Bc9',
      decimals: 18,
      symbol: 'WBTC',
      slot: 0,
    },
    waWBTC: {
      address: '0xB846B79562Bc238b1919c665AB49F6217c072D11',
      decimals: 18,
      symbol: 'waWBTC',
      slot: 0,
    },
    bbadai: {
      address: '0x594920068382f64e4bc06879679bd474118b97b1',
      decimals: 18,
      symbol: 'bbadai',
      slot: 0,
    },
    bbausdc: {
      address: '0x4d983081b9b9f3393409a4cdf5504d0aea9cd94c',
      decimals: 18,
      symbol: 'bbausdc',
      slot: 0,
    },
    bbausdt: {
      address: '0xd03d4d8b4669d135569215dd6c4e790307c8e14b',
      decimals: 18,
      symbol: 'bbausdt',
      slot: 0,
    },
    bbamai: {
      id: '0x24c52fee349194f68a998ac4e2ce170d780d010c0000000000000000000001a1',
      address: '0x24C52feE349194f68A998aC4E2ce170D780D010c',
      decimals: 18,
      symbol: 'bb-a-mai',
      slot: 0,
    },
    bbaweth: {
      id: '0xd8143b8e7a6e452e5e1bc42a3cef43590a2300310000000000000000000001a2',
      address: '0xD8143B8E7a6e452E5E1BC42A3ceF43590A230031',
      decimals: 18,
      symbol: 'bb-a-weth',
      slot: 0,
    },
    bbamaiweth: {
      id: '0x45631a4b3cab78e6dfdd21a7025a61fac76839190000000000000000000001a8',
      address: '0x45631A4b3CaB78E6DFDd21a7025A61fAC7683919',
      decimals: 18,
      symbol: 'bb-a-mai-weth',
      slot: 0,
    },
    boostedMeta1: {
      id: '0x48e984db5f9ba1bf2ee21d0a207a96c944d807e30000000000000000000001a9',
      address: '0x48e984DB5F9BA1Bf2Ee21d0A207a96C944D807E3',
      decimals: 18,
      symbol: 'boostedMeta1',
      slot: 0,
    },
    boostedMetaAlt1: {
      id: '0x98f3b300d7d0607ed69be014ec0d99567b00be6d00000000000000000000020a',
      address: '0x98f3b300d7d0607ed69be014ec0d99567b00be6d',
      decimals: 18,
      symbol: 'boostedMetaAlt1',
      slot: 0,
    },
    boostedMetaBig1: {
      id: '0xae5bfce463ab4689e9353d13b537e9896f13c7420000000000000000000001aa',
      address: '0xae5bfce463ab4689e9353d13b537e9896f13c742',
      decimals: 18,
      symbol: 'boostedMetaBig1',
      slot: 0,
    },
    bbausd2: {
      id: '0x3d5981bdd8d3e49eb7bbdc1d2b156a3ee019c18e0000000000000000000001a7',
      address: '0x3d5981BDD8D3E49EB7BBDC1d2B156a3eE019c18e',
      decimals: 18,
      symbol: 'bbausd2',
      slot: 0,
    },
    WBTCWETH: {
      id: '0x16faf9f73748013155b7bc116a3008b57332d1e600020000000000000000005b',
      address: '0x16faf9f73748013155b7bc116a3008b57332d1e6',
      decimals: 18,
      symbol: 'B-50WBTC-50WETH',
      slot: 0,
    },
    boostedWeightedSimple1: {
      id: '0xd625c90154084cf1417227bbdea4ef151f746995000200000000000000000272',
      address: '0xd625c90154084cf1417227bbdea4ef151f746995',
      decimals: 18,
      symbol: 'BWS1',
      slot: 0,
    },
    boostedWeightedGeneral1: {
      id: '0x42827c5452a8f4f13f4d5a1048dbfc58c77e98f5000100000000000000000273',
      address: '0x42827c5452a8f4f13f4d5a1048dbfc58c77e98f5',
      decimals: 18,
      symbol: 'BWG1',
      slot: 0,
    },
    boostedWeightedMeta1: {
      id: '0x3b01654804b0cea899d5edf8fd7000fe1c0911bd000200000000000000000274',
      address: '0x3b01654804b0cea899d5edf8fd7000fe1c0911bd',
      decimals: 18,
      symbol: 'BWM1',
      slot: 0,
    },
    boostedWeightedMetaAlt1: {
      id: '0x5f037eadf5cd0bc5fc198e6020f33f21a9361fc8000200000000000000000275',
      address: '0x5f037eadf5cd0bc5fc198e6020f33f21a9361fc8',
      decimals: 18,
      symbol: 'BWMA1',
      slot: 0,
    },
    boostedWeightedMetaGeneral1: {
      id: '0xe0baf79433d233c26b41cac99ddcd73830f257e5000100000000000000000276',
      address: '0xe0baf79433d233c26b41cac99ddcd73830f257e5',
      decimals: 18,
      symbol: 'BWMG1',
      slot: 0,
    },
  },
  [Network.SEPOLIA]: {
    WETH: {
      address: '0x7b79995e5f793a07bc00c21412e50ecae098e7f9',
      decimals: 18,
      symbol: 'WETH',
    },
    BAL: {
      address: '0xb19382073c7a0addbb56ac6af1808fa49e377b75',
      decimals: 18,
      symbol: 'BAL',
    },
  },
  [Network.ZKEVM]: {
    WETH: {
      address: '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9',
      decimals: 18,
      symbol: 'WETH',
    },
    wstETH: {
      address: '0x5D8cfF95D7A57c0BF50B30b43c7CC0D52825D4a9',
      decimals: 18,
      symbol: 'wstETH',
    },
    USDC: {
      address: '0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035',
      decimals: 6,
      symbol: 'USDC',
    },
  },
};
