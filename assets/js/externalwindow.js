
$(function () {


	function externalWindow() {
		let externalFlg = false;
		let selectDomain = ''; // リンク元ドメイン

		//ホワイトドメイン
		//モーダルを表示しないドメインを指定
		const whitelistdomain = {
			'c2.taiho.co.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp',
				'tiovita.hk',
				'taihoshop.jp',
				'abraxane.jp',
				'tiovita.jp',
				'ts-1.taiho.co.jp',
				'www.aloxi.jp',
				'www.tiovita-cp.jp',
				'eqm.page.link',
				'survivorship.jp',
				'www.tremfya.jp'
			],
			'taiho.co.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp',
				'tiovita.hk',
				'taihoshop.jp',
				'abraxane.jp',
				'tiovita.jp',
				'ts-1.taiho.co.jp',
				'www.aloxi.jp',
				'www.tiovita-cp.jp',
				'eqm.page.link',
				'survivorship.jp',
				'www.tremfya.jp'
			],
			'db.taiho.co.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'nyugan.info': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'hinnyou.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'survivorship.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'okusuri.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'ronbun.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'tablet.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'cancertherapy.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'briefings.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'acsprtnavi.c-nuage.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'reg18.smp.ne.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'db.taiho.co.jp',
				'nyugan.info',
				'hinnyou.jp',
				'www.hinnyou.jp',
				'survivorship.jp',
				'okusuri.jp',
				'ronbun.jp',
				'tablet.jp',
				'cancertherapy.jp',
				'www.cancertherapy.jp',
				'briefings.jp',
				'acsprtnavi.c-nuage.jp',
				'reg18.smp.ne.jp'
			],
			'tiovita.hk': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'tiovita.hk',
				'taihoshop.jp'

			],
			'taihoshop.jp': [
				'taiho.co.jp',
				'www.taiho.co.jp',
				'tiovita.hk',
				'taihoshop.jp'
			]
		}

		// URLに記載されたパラメータを配列で返す
		function getUrlVars() {
			let vars = [], hash;
			let hashes = decodeURI(window.location.href.replace(location.hash, "")).slice(window.location.href.indexOf('?') + 1).split('&');
			for (let i = 0; i < hashes.length; i++) {
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		}

		//ホワイトリストのみアナウンス表示フラグを立てる
		Object.keys(whitelistdomain).forEach(function (key) {
			const value = whitelistdomain[key];
			if (location.hostname.indexOf(key) != -1) {
				selectDomain = key;
				externalFlg = true;
			}
		});


		const urlParam = getUrlVars();
		if (urlParam.domain != undefined) {
			if (whitelistdomain[urlParam.domain] != undefined) {
				selectDomain = urlParam.domain;
				externalFlg = true;
			}
		}

		if (externalFlg == true) {
			let reg = new RegExp("https?://.*?/(.*?)(?=/)");
			firstdirectory = "";

			if (location.href.match(reg) != null) {
				firstdirectory = location.href.match(reg)[1];
			}


			$('body').append(
				'<div class="m-box-modal">' +
				'<div class="modal-overlay"></div>' +
				'<div class="modal-inner">' +
				'<p class="modal-txt">これから先は、外部サイトにリンクされます。<br class="hide-sp"> サイトをご覧になる場合は下のボタンをクリックしてください。</p>' +
				'<p class="modal-link-wrap">' +
				'<a href="" class="modal-link" target="_blank" rel="noopener"><span>リンク先に移動する</span></a>' +
				'</p>' +
				'<p class="modal-close">' +
				'<button type="button" class="close-btn"><span class="btn-wrap">閉じる</span></button>' +
				'</p>' +
				'</div>' +
				'</div>'
			);
			//モーダル表示
			function modalShow(url) {
				$('.m-box-modal .modal-link').attr('href', url);
				$('.m-box-modal').addClass('is-active').attr('style', '');
			}

			//モーダル非表示
			function modalHide() {
				$('.m-box-modal .modal-link').attr('href', '');
				$('.m-box-modal').removeClass('is-active').attr('style', '');
			}

			$('a[href^=http],a[href^=\\/\\/]').on('click', function (e) {
				const $this = $(this);
				let targetURL = $this.attr('href').replace(/https?:\/\//, '');
				const question_index = targetURL.indexOf('?');
				if (question_index != -1) {
					targetURL = targetURL.substring(0, question_index);
				}
				let isExternal = true;

				if (targetURL.indexOf(location.hostname) != -1) {
					isExternal = false;
				}

				Object.keys(whitelistdomain[selectDomain]).forEach(function (key) {
					const value = whitelistdomain[selectDomain][key];
					//ホワイトリストに含まれているか？
					if (targetURL.indexOf(value) === 0) {
						isExternal = false;
					}
				});

				if (isExternal == true) {
					e.preventDefault();
					modalShow($this.attr('href'));
				} else {
				}

			});

			$('.m-box-modal .modal-close .close-btn,.m-box-modal .modal-overlay').on('click', function (e) {
				modalHide();
			});

			$('.m-box-modal .modal-link').on('click', function (e) {
				$('.m-box-modal').removeClass('is-active').css('transition', 'none');

			});
		}

	}



	externalWindow();


});
