import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layouts/layout'

const CV = () => (
  <Layout>
  <div className="sub-main">
   <div className="content">
    <h1>Curriculum Vitae</h1> 
    <p>I am looking to move into programming from my physical chemistry background.</p>

    <h3>Work Skills</h3>		
    
    <p>
      I am a scientist by training which means I have a careful and methodical approach to analysing and addressing tasks. My previous work has required
      deliberate and observant operation of scientific equipment to conduct systematic, consistent and organised investigations. The outcomes of experiments required concise and complete explanations with
      reference to previous work to formulate conclusions and future plans. 
    </p>
    <p>
      I have used my communication skills while working within a team and while supervising others. The culmination of my work was a written thesis which reinforced planning and logically building an argument. 
    </p>
    <p>
      The enjoyment I got from writing scripts used to automize data analysis prompted me to transition into programming and wev development.
    </p>
    
    
    <h3>Education</h3>
    <table> 
      <tr>
        <td >'11 - '15</td>
        <td><b>Chemistry PhD</b><i>The University of Nottingham, University Park, Nottingham. NG7 2RD.</i></td> 
      </tr>
      <tr>
        <td >'07 - '11</td>
        <td><b>Master of Science (MSci), 2.1 class.</b><i>The University of Nottingham, University Park, Nottingham. NG7 2RD.</i></td> 
      </tr>
    </table>
    <h3>Synopsis of Research</h3>		
    
    <p>
      In the summer of 2010 I worked with Dr. Nick Besley conducting theoretical calculations on a range of amino acids and proteins. In the final year of my MSci degree 
      I worked on the synthesis of amino acid based ionic liquids with Prof. Peter Licence. 
    </p>
    <p>
      In 2011 I started studying for my PhD under Prof. Robert Jones in the field of 
      surface chemistry. During my doctorate I studied ionic liquids interacting with small molecules under ultra-high vacuum (UHV, 10<sup>-9</sup> mbar) conditions. This involved measuring 
      the evaporating flux of a surface species undergoing temperature programmed desorption (TPD) with line-of-sight mass spectrometry (LOSMS). 
    </p>
    <p>
      In addition I had the opportunity to work at Diamond Light Source Synchrotron in Oxford three times between 
      2013 and 2015 to use a variety of x-ray and electron techniques. Data was analysed using custom scripts to derive information on species interactions.
    </p>	

    <h3>Employment History</h3>
    <table>
      <tr>
        <td >'13-'14</td>
        <td><b>Physical Chemistry Lab Demonstrator</b><i> The University of Nottingham, University Park, Nottingham. NG7 2RD.</i><br/>Aid and support undergraduate students carrying out planned physical and theoretical experiments within an inclusive team of two graduates and a senior lecturer. </td> 
      </tr>
      <tr>
        <td>'11</td>
        <td><b>Summer Research Assistant</b><i> The University of Nottingham, University Park, Nottingham. NG7 2RD.</i><br/>Work independently under the supervision of Dr Pete Licence synthesising amino acid based Ionic Liquids.</td>
      </tr>
      <tr>
          <td>'10</td>
          <td><b>Summer Research Assistant</b><i> The University of Nottingham, University Park, Nottingham. NG7 2RD.</i><br/>Work independently under the supervision of Dr Nick Besley running theoretical calculations to simulate protein spectra.</td>
      </tr>
    </table>

    <h3>References</h3>	
    
    <table >
          <tr>
        <td ><b>Professor Robert Jones</b><br/>PhD Supervisor</td>
        <td><i>The University of Nottingham, University Park, Nottingham. NG7 2RD.</i></td> 
        </tr>
        <tr>
          <td ><b>Professor Peter Licence</b><br/>PhD Supervisor</td>
          <td><i>The University of Nottingham, University Park, Nottingham. NG7 2RD.</i></td>

      </tr>
      <tr>
          <td ><b>Dr Nick Besley</b><br/>Summer Project Supervisor</td>
          <td><i>The University of Nottingham, University Park, Nottingham. NG7 2RD.</i></td>
      </tr>
    </table>

    <h3>Publications</h3>
    
    <p><i>A theoretical study of the near edge X-ray absorption fine structure of amino acids and proteins</i>, M.W. Buckley, N.A. Besley, Phys. Chem. Lett. 501 (2011) 540.</p>
    <p><i>Ionic Liquids Interacting with Small Molecules and a Gold (110) surface</i>, M.W. Buckley, PhD Thesis.</p>		
    
    <p><Link to="static/CV Matthew William Buckley.pdf"> For a .PDF of this CV please click here. </Link> </p>
    </div>
	</div>
  </Layout>
)

export default CV;