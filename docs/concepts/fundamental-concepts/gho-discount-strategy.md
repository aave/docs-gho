---
sidebar_position: 4
---

# Discount Rate Strategy

Given the nature of the asset, this integration allows for innovative features that provide greater utility for Governance and community participants. The implementation of GHO includes a Discount Strategy mechanism. The initial discount strategy allows Safety Module participants (users who have [staked AAVE](https://docs.aave.com/faq/#aave-aave-token) and now hold stkAAVE) to access a discount on the GHO borrow rate. The strategy sets a certain amount of GHO at a discount per stkAAVE , and a discount on the interest rates that can vary from 0% (no discount) to 100% (full discount). Only stkAAVE is eligible for the GHO borrowing discount.

The configuration of the discount rate is controlled by [Aave Governance](https://governance.aave.com/). Aave Governance has the right to determine the discount model parameters and eventually propose changes to the current implementation.

By contributing to the Safety Module, users are taking a risk that they in the case of bad debt arising in the Aave protocol. To incentivize users to participate in staking, and reward them for taking this risk, users staking AAVE can receive a discount on their interest rate.

## Discount Rate Updates

The discount model is designed to be updated easily, therefore if Governance determines a different strategy is required, it can be implemented efficiently. Governance may decide to change the strategy in situations when too many users have a very good discount rate.

The discount rate is available to the user for a certain period of time and is subject to change whenever a user triggers a discount update or is rebalanced.

When a user receives a discount, it is assigned to them for a certain period, for example, 6 months. After the aforementioned, if Aave Governance has set a new discount strategy, and the user receives another discount rate, it may not be the same, it will have changed to the rate updated by Governance.

This may also happen if a user triggers a discount update, such as, borrowing and repaying GHO, and updating their stkAAVE balance.

## Initial Implementation

The initial implementation of the discount model on borrow rates defines:

- A maximum amount of GHO that can be generated at a discounted rate through borrowing within the Aave Protocol, per stkAAVE held.
- A discount on the borrow rate that the user will receive per discounted GHO.

Given the discount model, the final borrow rate a user will receive is defined as follows:

$$
\small R_{GHO_u} = \begin{dcases}   R_{GHO}                                                                   &\text{if } B_{stkAAVE}(u) = 0 \cr   R_{GHO} - R_{GHO} * R_d                                                   &\text{if } B_{stkAAVE} > 0 \land P(u) \leq B_{stkAAVE} * T \cr   \frac{R_{GHO} * P_{nd}(u) + (R_{GHO} - R_{GHO} * R_d) * P_d(u)} {P(u)}      &\text{if } B_{stkAAVE} > 0 \land P(u) \gt B_{stkAAVE} * T\end{dcases}
$$

Where:

| Variable         | Description                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| $u$              | The user                                                                                                                                             |
| $B_{stkAAVE}(u)$ | The stkAAVE balance of the user $u$                                                                                                                  |
| $R_{GHO_u}$      | The current, governance controlled borrow rate for GHO (without any discount applied), $0 ≤ R_{GHO} ≤ 1$                                             |
| $T$              | The maximum amount of GHO that can be generated at discount through the Borrow interaction within the Aave Protocol, per stkAAVE held (per user $u$) |
| $R_d$            | The global discount rate, the discount on the borrow rate that the user will receive per discounted GHO tokens, $0 ≤ R_d ≤ 1$                        |
| $P(u)$           | The current principal borrowed by the user $u$, in GHO tokens                                                                                        |
| $P_d(u)$         | The part of the principal at a discount (when $B_{stkAAVE} > 0$), $P_d(u) = B_{stkAAVE(u)} * T$                                                      |
| $P_{nd}(u)$      | The part of the principal that exceeds the discount (when $B_{stkAAVE} > 0$), $P_{nd}(u) = P(u) − P_d(u)$                                            |

:::caution

The forumla is an estimate of the final interest rate the user will receive.

:::

The following examples help to explain the above equation:

### Example 1

The current interest rate is 2%, and the user ($u$) has not staked any AAVE in the Safety Module.

Given:

- $R_{GHO} = 0.02$
  - The borrow rate
- $B_{stkAAVE}(u) = 0$
  - The user does not have stkAAVE

$B_{stkAAVE}(u) = 0$

Therefore:

$\begin{aligned}
R_{GHO_u} &= R_{GHO} \\
    &= 0.02
\end{aligned}$

As the user has not staked AAVE in the Safety Module, they are not eligible for a discount on the borrow rate. They can borrow GHO with the current, governance-controlled borrow rate, in this example, 2%.

### Example 2

The current interest rate is 3%. Per stkAAVE, a user can receive a 50% discount on interest, for 100 GHO tokens. The user stakes 1 AAVE and borrows 100 GHO.

Given:

- $R_{GHO} = 0.03$
  - The borrow rate
- $T = 100$
  - The maximum amount of GHO available for the user to borrow at a discount
- $R_d = 0.5$
  - The discount available on the borrow rate
- $P(u) = 100$
  - The amount of GHO borrowed by the user
  - This is the maximum amount the user can borrow at a discount - $T$
- $B_{stkAAVE}(u) = 1$
- $P_d(u) = T * B_{stkAAVE}(u) = 100 * 1 = 100$
  - The amount of GHO the user has borrowed at a discount
- $P_{nd}(u) = P(u) − P_d(u) = 100 − 100 = 0$
  - The amount of GHO borrowed that exceeds the discount

$B_{stkAAVE} > 0 ∧ P(u) ≤ B_{stkAAVE} * T$

Therefore:

$\begin{aligned}
R_{GHO_u} &= R_{GHO} - R_{GHO} * R_d \\
       &= 0.03 - 0.03 * 0.5 \\
       &= 0.015
\end{aligned}$

The user has staked AAVE in the Safety Module, and the amount of GHO they have borrowed has not exceeded the maximum amount of GHO to borrow at a discount. Their interest rate is 50% of 3%. They can borrow GHO with a discounted borrow rate, in this example, 1.5%.

### Example 3

The current interest rate is 3%. Per stkAAVE, a user can receive a 50% discount on interest, for 100 GHO tokens. The user stakes 1 AAVE and borrows 200 GHO (compared to 100 GHO in Example 2).

Given:

- $R_{GHO} = 0.03$
  - The borrow rate
- $T = 100$
  - The maximum amount of GHO available for the user to borrow at a discount
- $R_d = 0.5$
  - The discount available on the borrow rate
- $P(u) = 200$
  - The amount of GHO borrowed by the user
  - This exceeds the maximum amount the user can borrow at a discount - $T$
- $B_{stkAAVE}(u) = 1*$
- $P_d(u) = T * B_{stkAAVE}(u) = 100 * 1 = 100$
  - The amount of GHO the user has borrowed at a discount
- $P_{nd}(u) = P(u) − P_d(u) = 200 − 100 = 100$
  - The amount of GHO borrowed that exceeds the discount

$B_{stkAAVE} > 0 ∧ P(u) > B{stkAAVE} * T$

Therefore:
$\begin{aligned}
R_{GHO_u} &= \frac{R_{GHO} * P_{nd}(u) + (R_{GHO} - R_{GHO} * R_d) * P_d(u)} {P(u)} \\
       &= \frac{0.03 * 100 + (0.03 - 0.03 * 0.5) * 100} {200} \\
       &= 0.0225
\end{aligned}$

The user has staked AAVE in the Safety Module, and the amount of GHO they have borrowed has exceeded the maximum amount of GHO to borrow at a discount. Therefore, they only get a discount on part of the GHO borrowed. 100 of the GHO borrowed will be at a 1.5% discount rate, and their effective interest rate will be 2.25%.
