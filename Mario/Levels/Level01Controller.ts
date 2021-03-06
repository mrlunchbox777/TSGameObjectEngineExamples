import { LevelController } from ".";

export class Level01Controller extends LevelController {

	update(): void {
		this.handleCameraZoom();
	}

	constructor() {
		super({
			tileFlags: [
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', 'hlg',   '',   '', '?'],
				['rb', 'rb', 'hcslg', 'htg'],
				['rb', 'rb', 'hrg'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'cbl', 'ctl'],
				['rb', 'rb', '', '', '', 'btb', '', '', '', 'cb',  'ct'],
				['rb', 'rb', '', '', '', '?',   '', '', '', 'cbr', 'ctr'],
				['rb', 'rb', '', '', '', 'btb', '', '', '?'],
				['rb', 'rb', '', '', '', '?'],
				['rb', 'rb', '', '', '', 'btb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', 'tbl', 'ttl'],
				['rb', 'rb', 'tbr', 'ttr'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', 'tbl', 'tbl', 'ttl'],
				['rb', 'rb', 'tbr', 'tbr', 'ttr'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', 'tbl', 'tbl', 'tbl', 'ttl'],
				['rb', 'rb', 'tbr', 'tbr', 'tbr', 'ttr'],
				['rb', 'rb', 'hlg',],
				['rb', 'rb', 'hcslg', 'hlg'],
				['rb', 'rb', 'hcg',   'hcslg', 'htg'],
				['rb', 'rb', 'hcsrg', 'hrg'],
				['rb', 'rb', 'hrg'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', 'tbl', 'tbl', 'tbl', 'ttl'],
				['rb', 'rb', 'tbr', 'tbr', 'tbr', 'ttr'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', 'hlg',],
				['rb', 'rb', 'hcslg', 'htg'],
				['rb', 'rb', 'hrg'],
				['rb', 'rb'],
				['rb', 'rb'],
				[],
				[],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '?'  ],
				['rb', 'rb', '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['',    '',  '', '', '', '',    '', '', '', 'btb'],
				[],
				[],
				['rb', 'rb'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['rb', 'rb', '', '', '', 'btb', '', '', '', '?'  ],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', '', '', '', 'btb'],
				['rb', 'rb', '', '', '', 'btb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', '', '', '', '?'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', '', '', '', '?', '', '', '', '?'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', '', '', '', '?'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
				['rb', 'rb', '', '', '', '', '', '', '', 'btb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['rb', 'rb', '', '', '', 'btb', '', '', '', '?'],
				['rb', 'rb', '', '', '', 'btb', '', '', '', '?'],
				['rb', 'rb', '', '', '', '',    '', '', '', 'btb'],
				['rb', 'rb'],
				['rb', 'rb'],
			],
		});
	}
}
