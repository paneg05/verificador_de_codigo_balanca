


    var produto = Array('abacaxi','abacate','abacate avocado','ameixa','atemoia',
    'ameixa importada','banana prata org','banana naninca','banana prata','banana maca',
    'banana da terra','caqui','caqui chocolate','caqui rama forte','coco verde',
    'coco seco','cereja','graviola','grapefruit','goiaba','kiwi','laranja pera','laranja bahia',
    'laranja lima','lichia','limao','limao siciliano','lima da persia','maca gala',
    'maca argentina','maca fuji','maca verde','mamo formosa','mamao papaya','manga espada',
    'manga tommy',)
    produto ['abacaxi'] = Array('102063')
    produto ['abacate'] = Array('284')
    produto ['abacate avocado'] = Array('182933')
    produto ['ameixa'] = Array('567')
    produto ['atemoia'] = Array('4565')
    produto ['ameixa importada'] = Array('1817')
    produto ['banana prata org'] = Array('111569')
    produto ['banana naninca'] = Array('574')
    produto ['banana prata'] = Array('581')
    produto ['banana maca'] = Array('604')
    produto ['banana da terra'] = Array('628')
    produto ['caqui'] = Array('635')
    produto ['caqui chocolate'] = Array('4602')
    produto ['caqui rama forte'] = Array('4629')
    produto ['coco verde'] = Array('100793')
    produto ['coco seco'] = Array('673')
    produto ['cereja'] = Array('79020')
    produto ['graviola'] = Array('2073')
    produto ['grapefruit'] = Array('116941')
    produto ['goiaba'] = Array('680')
    produto ['laranja pera'] = Array('703')
    produto ['laranja bahia'] = Array('4657')
    produto ['laranja lima'] = Array('2943')
    produto ['lichia'] = Array('16285')
    produto ['limao'] = Array('437')
    produto ['limao siciliano'] = Array('28899')
    produto ['lima da persia'] = Array('734')
    produto ['maca gala'] = Array('176623')
    produto ['maca argentina'] = Array('802')
    produto ['maca fuji'] = Array('4664')
    produto ['maca verde'] = Array('4671')
    produto ['mamo formosa'] = Array('2752')
    produto ['mamao papaya'] = Array('819')
    produto ['manga espada'] = Array('694289')
    produto ['manga tommy'] = Array('840')

    
    
    

  
    function recupera_produto(){
        
        var nome = document.getElementById('nome_produto').value
        nome_produto = nome.toLowerCase()
        var posicao = produto.indexOf(nome_produto)
        
        document.getElementById('nome_produto1').value=produto[posicao]
        if (document.getElementById('nome_produto1').value=== 'undefined') {
            document.getElementById('nome_produto1').value = 'nome do produto'
        }else if (posicao != -1) {
            document.getElementById('codigo').value = produto[document.getElementById('nome_produto1').value][0] 
        }
        if (document.getElementById('nome_produto1').value=== 'nome do produto') {
            document.getElementById('codigo').value = 'codigo do produto'
        }

        
        

        

        
    }
    
    
