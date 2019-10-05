import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Navbar from "../Navbar";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}));


export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

    };

    const handleInput = (type) => {
        console.log("something", type);
    }

    useEffect(function onLoad() {
        const accessString = localStorage.getItem('JWT');
        axios.get("/api/expense",
            { headers: { Authorization: `JWT ${accessString}` } }).then(res => {
                console.log(res.data)
                this.setState({ expenses: res.data })
            })
    
        })

    const setName = ((event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })    
    })
    
            //onButtonSubmit = (event) => {
  const getJWT = ((event) => {
        event.preventDefault();
        const accessString = localStorage.getItem('JWT');
        axios.post("/api/expenses", {
                    date: this.state.date,
                    name: this.state.name,
                    amount: this.state.amount
              },
                    {
    
    
                        headers: {
                            headers: { Authorization: `JWT ${accessString}` }
                        }
                    }).then(res => {
                        let newExpenses = this.state.expenses.concat([res.data])
                        this.setState({ expenses: newExpenses, date: "", purchasedLocation: "", amount: "" })
                        
   
    
    }) })

    // const saveProduct = ((product) => {
    //     product.id = new Date().getTime();
    //     this.setState((prevState) => {
    //       let products = prevState.products;
    //       products[product.id] = product;
    //       return { products };
    //     })

    //     this.saveProduct = this.saveProduct.bind(this);
    //     <ProductForm onSave={this.saveProduct} />

    return (


        <div className={classes.root}>
            <Navbar />
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Advertising</Typography>
                    <Typography className={classes.secondaryHeading}>i.e.(Social media ads, Posters, Flyers, PR, Business Cards, Stage Banner) </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>

                    <TextField className={classes.textField} label="Date" margin="normal" />
                    <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                    <TextField className={classes.textField} label="Amount" margin="normal" />
                    <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("Advertising") }} className={`${classes.button}` + " formButton"} />


                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Contract Labor</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Pay to band members, Session Artist, Production, Studio time. Over 600 will require 1099 filing)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("ContractLabor") }} className={`${classes.button}` + " formButton"} />

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel02'} onChange={handleChange('panel02')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel02bh-header"
                >
                    <Typography className={classes.heading}>Dues</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Spotify, Itunes, Software Subscriptions, DAW, Monthly App Subscriptions)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("Dues") }} className={`${classes.button}` + " formButton"} />

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Equipment</Typography>
                    <Typography className={classes.secondaryHeading}>
                        i.e.(Amps, Computer, Guitars, Drums, Keyboard, note:if over 1,000 for item may depreciate)

          </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("Equipment") }} className={`${classes.button}` + " formButton"} />
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Insurance</Typography>
                    <Typography className={classes.secondaryHeading}>    i.e. ( car insurance, gear insurance, disability insurance )
               </Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("Insurance") }} className={`${classes.button}` + " formButton"} />
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography className={classes.heading}>Legal and Professional </Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Tax Preperation, Bookkeeping, Lawyer fees)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("LegalAndProfessional") }} className={`${classes.button}` + " formButton"} />

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                >
                    <Typography className={classes.heading}>Meals and Entertainment</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Meals with clients, Networking functions, Concerts)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("MealsAndEntertainment") }} className={`${classes.button}` + " formButton"} />

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>


            <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                >
                    <Typography className={classes.heading}>Office Expenses</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Paper, Ink, Printer, Envelopes, Organzational items)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("OfficeExpenses") }} className={`${classes.button}` + " formButton"} />


                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8bh-content"
                    id="panel6bh-header"
                >
                    <Typography className={classes.heading}>Per Diem Days</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Days spent overnight out of town more than 50 miles from home)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="No of Days Inside United States" margin="normal" />
                        <TextField className={classes.textField} label="No of Days Outside the United States" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("PerDiemDays") }} className={`${classes.button}` + " formButton"} />


                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel9bh-content"
                    id="panel9bh-header"
                >
                    <Typography className={classes.heading}>Rental</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Rental equipment, Rental Car, Reharsal Space, Storage)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("Rental") }} className={`${classes.button}` + " formButton"} />

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel20bh-content"
                    id="panel20bh-header"
                >
                    <Typography className={classes.heading}>Repairs</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Instrument repair, Equipment repair, Computer Repair, Auto Repair)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("Repairs") }} className={`${classes.button}` + " formButton"} />

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel21bh-content"
                    id="panel21bh-header"
                >
                    <Typography className={classes.heading}>Supplies</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Picks, strings, drum heads, drum sticks)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("Supplies") }} className={`${classes.button}` + " formButton"} />

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel22bh-content"
                    id="panel22bh-header"
                >
                    <Typography className={classes.heading}>Transportation</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Uber, Lyft, Taxi, Train)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("Transportation") }} className={`${classes.button}` + " formButton"} />

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel23bh-content"
                    id="panel23bh-header"
                >
                    <Typography className={classes.heading}>Travel</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Flights, Lodging, Subway)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("Travel") }} className={`${classes.button}` + " formButton"} />

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel24bh-content"
                    id="panel24bh-header"
                >
                    <Typography className={classes.heading}>Wireless</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Cellular Phone, Internet)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>
                    <Typography>
                        <TextField className={classes.textField} label="Date" margin="normal" />
                        <TextField className={classes.textField} label="Purchase Location" margin="normal" />
                        <TextField className={classes.textField} label="Amount" margin="normal" />
                        <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput("Wireless") }} className={`${classes.button}` + " formButton"} />


                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>


        </div>



    );




};




