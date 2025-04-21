export interface Article {
  id: string;
  name: string; // fields.Char('Title', required=True)
  summary: string; // fields.Text('Summary')
  content_url: string; // fields.Char('Original URL', required=True)
  image_url: string; // fields.Char('Image URL')
  published_date: Date; // fields.Datetime('Published Date')
  source_id: string; // fields.Many2one('news.source', string='Source', required=True)
  category_id: string; // fields.Many2one('news.category', string='Category')
  country_id: string; // fields.Many2one('res.country', string='Country')
  language: 'fr' | 'ar' | 'en'; // fields.Selection([('fr', 'Français'), ('ar', 'Arabe'), ('en', 'Anglais')], string='Language', default='fr')
  author: string; // fields.Char('Author')
  is_active: boolean; // fields.Boolean('Active', default=True)
}