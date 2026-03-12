const Footer = () => {
  return (
    <footer className="py-16 bg-muted/50">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="text-xl font-bold text-foreground">Elyra</span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Sites profissionais por assinatura para pequenos negócios.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Criação de sites</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sites para empresas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos de uso</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Política de privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Elyra. Todos os direitos reservados.</p>
          <p className="text-xs text-muted-foreground">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
