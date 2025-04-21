export interface Source {
  id: string;
  name: string; // fields.Char('Source Name', required=True)
  base_url: string; // fields.Char('Website')
  feed_url: string; // fields.Char('RSS/API URL')
  country_id: string; // fields.Many2one('res.country', string='Country')
  is_active: boolean; // fields.Boolean('Active', default=True)
  auto_import: boolean; // fields.Boolean('Auto Import Enabled', default=True)
  language: 'fr' | 'ar' | 'en'; // fields.Selection([('fr', 'Français'), ('ar', 'Arabe'), ('en', 'Anglais')], string='Language', default='fr')
  article_ids: string[]; // fields.One2many('news.article', 'source_id', string='Articles')
}