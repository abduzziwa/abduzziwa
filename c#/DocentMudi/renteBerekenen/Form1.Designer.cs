namespace renteBerekenen
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.Naam = new System.Windows.Forms.Label();
            this.SpaarBedraaglbl = new System.Windows.Forms.Label();
            this.AchterNaam = new System.Windows.Forms.Label();
            this.naamTxtBx = new System.Windows.Forms.TextBox();
            this.spaarBedraagTxtbx = new System.Windows.Forms.TextBox();
            this.achterNaamTxtbx = new System.Windows.Forms.TextBox();
            this.Outputlbl = new System.Windows.Forms.Label();
            this.SubmitBtn = new System.Windows.Forms.Button();
            this.BackBtn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // Naam
            // 
            this.Naam.AutoSize = true;
            this.Naam.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Naam.Location = new System.Drawing.Point(140, 50);
            this.Naam.Name = "Naam";
            this.Naam.Size = new System.Drawing.Size(70, 25);
            this.Naam.TabIndex = 0;
            this.Naam.Text = "Naam:";
            // 
            // SpaarBedraaglbl
            // 
            this.SpaarBedraaglbl.AutoSize = true;
            this.SpaarBedraaglbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.SpaarBedraaglbl.Location = new System.Drawing.Point(139, 175);
            this.SpaarBedraaglbl.Name = "SpaarBedraaglbl";
            this.SpaarBedraaglbl.Size = new System.Drawing.Size(174, 25);
            this.SpaarBedraaglbl.TabIndex = 1;
            this.SpaarBedraaglbl.Text = "Het spaarbedraag:";
            // 
            // AchterNaam
            // 
            this.AchterNaam.AutoSize = true;
            this.AchterNaam.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.AchterNaam.Location = new System.Drawing.Point(139, 112);
            this.AchterNaam.Name = "AchterNaam";
            this.AchterNaam.Size = new System.Drawing.Size(129, 25);
            this.AchterNaam.TabIndex = 2;
            this.AchterNaam.Text = "Achternaam: ";
            // 
            // naamTxtBx
            // 
            this.naamTxtBx.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.naamTxtBx.Location = new System.Drawing.Point(337, 45);
            this.naamTxtBx.Name = "naamTxtBx";
            this.naamTxtBx.Size = new System.Drawing.Size(181, 30);
            this.naamTxtBx.TabIndex = 3;
            // 
            // spaarBedraagTxtbx
            // 
            this.spaarBedraagTxtbx.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.spaarBedraagTxtbx.Location = new System.Drawing.Point(337, 175);
            this.spaarBedraagTxtbx.Name = "spaarBedraagTxtbx";
            this.spaarBedraagTxtbx.Size = new System.Drawing.Size(100, 30);
            this.spaarBedraagTxtbx.TabIndex = 4;
            // 
            // achterNaamTxtbx
            // 
            this.achterNaamTxtbx.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.achterNaamTxtbx.Location = new System.Drawing.Point(337, 112);
            this.achterNaamTxtbx.Name = "achterNaamTxtbx";
            this.achterNaamTxtbx.Size = new System.Drawing.Size(181, 30);
            this.achterNaamTxtbx.TabIndex = 5;
            // 
            // Outputlbl
            // 
            this.Outputlbl.BackColor = System.Drawing.SystemColors.ActiveBorder;
            this.Outputlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Outputlbl.Location = new System.Drawing.Point(334, 235);
            this.Outputlbl.Name = "Outputlbl";
            this.Outputlbl.Size = new System.Drawing.Size(559, 226);
            this.Outputlbl.TabIndex = 6;
            // 
            // SubmitBtn
            // 
            this.SubmitBtn.Font = new System.Drawing.Font("Microsoft Tai Le", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.SubmitBtn.Location = new System.Drawing.Point(337, 511);
            this.SubmitBtn.Name = "SubmitBtn";
            this.SubmitBtn.Size = new System.Drawing.Size(149, 69);
            this.SubmitBtn.TabIndex = 7;
            this.SubmitBtn.Text = "Submit";
            this.SubmitBtn.UseVisualStyleBackColor = true;
            this.SubmitBtn.Click += new System.EventHandler(this.SubmitBtn_Click);
            // 
            // BackBtn
            // 
            this.BackBtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.BackBtn.Location = new System.Drawing.Point(568, 511);
            this.BackBtn.Name = "BackBtn";
            this.BackBtn.Size = new System.Drawing.Size(146, 69);
            this.BackBtn.TabIndex = 8;
            this.BackBtn.Text = "Back";
            this.BackBtn.UseVisualStyleBackColor = true;
            this.BackBtn.Click += new System.EventHandler(this.BackBtn_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(941, 651);
            this.Controls.Add(this.BackBtn);
            this.Controls.Add(this.SubmitBtn);
            this.Controls.Add(this.Outputlbl);
            this.Controls.Add(this.achterNaamTxtbx);
            this.Controls.Add(this.spaarBedraagTxtbx);
            this.Controls.Add(this.naamTxtBx);
            this.Controls.Add(this.AchterNaam);
            this.Controls.Add(this.SpaarBedraaglbl);
            this.Controls.Add(this.Naam);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label Naam;
        private System.Windows.Forms.Label SpaarBedraaglbl;
        private System.Windows.Forms.Label AchterNaam;
        private System.Windows.Forms.TextBox naamTxtBx;
        private System.Windows.Forms.TextBox spaarBedraagTxtbx;
        private System.Windows.Forms.TextBox achterNaamTxtbx;
        private System.Windows.Forms.Label Outputlbl;
        private System.Windows.Forms.Button SubmitBtn;
        private System.Windows.Forms.Button BackBtn;
    }
}

