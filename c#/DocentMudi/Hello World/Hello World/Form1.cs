using System.Data.SqlClient;

namespace Hello_World
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        SqlConnection conn = new SqlConnection(@"Data Source=ABDULMLP\SQLEXPRESS;Initial Catalog=LoginTest;Integrated Security=True;Trust Server Certificate=True");

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button_login_Click(object sender, EventArgs e)
        {
            String username, user_password;

            username = txt_username.Text;
            user_password = txt_password.Text;

            try
            {
                StringFormat query = "SELECT * FROM Login_Table WHERE usename = '"txt.usernzmf
            }
            catch {
                MessageBox.Show("Error");
            }
            finally{
                conn.Close();
             }
        }
    }
}
